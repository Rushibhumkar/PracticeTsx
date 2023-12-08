import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CommonTextInput from './CommonTextInput';

const Components = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <CommonTextInput
        placeholder="Enter Name"
        keyboardType="default"
        value={name}
        onChangeText={(txt: string) => {
          setName(txt);
        }}
        maxLength={30}
        disabled={false}
      />
      <CommonTextInput
        placeholder="Enter Mobile"
        keyboardType={'number-pad'}
        value={mobile}
        onChangeText={(txt: string) => {
          setMobile(txt);
        }}
        maxLength={10}
        disabled={false}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          borderRadius: 20,
          alignSelf: 'center',
          overflow: 'visible',
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Components;

const styles = StyleSheet.create({});
