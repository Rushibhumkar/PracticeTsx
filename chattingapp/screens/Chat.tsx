import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
const Chat = ({data, id}: any) => {
  const route: any = useRoute();
  const [messages, setMessages] = useState([]);
  console.log(id);
  console.log(data);
  console.log(route.params.id + route.params.data.userId);
  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc(route.params.id + route.params.data.userId)
      .orderBy('createdAt', 'desc');
    subscriber.onSnapshot((querysnapshot: any) => {
      const allmessages = querysnapshot.docs.map((item: any) => {
        return {...item._data, createdAt: Date.parse(new Date())};
      });
      setMessages(allmessages);
    });
    return () => subscriber();
  }, []);
  const onSend = useCallback(async (messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: route.params.id,
      sendTo: route.params.data.userId,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection('chats')
      .doc('' + route.params.id + route.params.data.userId)
      .collection('messages')
      .add(myMsg);
    firestore()
      .collection('chats')
      .doc('' + route.params.data.userId + route.params.id)
      .collection('messages')
      .add(myMsg);
  }, []);
  return (
    <View style={{flex: 1}}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: route.params.id,
        }}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
