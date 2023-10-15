import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {GiftedChat, InputToolbar, Composer} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
const Chat = ({data, id}: any) => {
  const route: any = useRoute();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc(route.params.id + route.params.data.userId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querysnapshot: any) => {
        const allmessages = querysnapshot.docs.map((item: any) => {
          // return {...item._data, createdAt: Date.parse(new Date())};
          return {...item.data(), createdAt: new Date(item.data().createdAt)};
        });
        setMessages(allmessages);
      });
    return () => subscriber();
  }, []);
  const onSend = useCallback(async (messages = []) => {
    const msg: any = messages[0];
    const myMsg: any = {
      ...msg,
      sendBy: route.params.id,
      sendTo: route.params.data.userId,
      createdAt: msg.createdAt.getTime(),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    await firestore()
      .collection('chats')
      .doc('' + route.params.id + route.params.data.userId)
      .collection('messages')
      .add(myMsg);
    await firestore()
      .collection('chats')
      .doc('' + route.params.data.userId + route.params.id)
      .collection('messages')
      .add(myMsg);
  }, []);
  return (
    <View style={{flex: 1}}>
      <GiftedChat
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: route.params.id,
        }}
        renderComposer={props => (
          <Composer
            {...props}
            textInputStyle={{
              color: '#000',
            }}
          />
        )}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
