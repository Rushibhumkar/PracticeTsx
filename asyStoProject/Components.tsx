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
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [badName, setBadName] = useState<boolean>(false);
  const [badMobile, setBadMobile] = useState<boolean>(false);
  const validate = () => {
    let valid = true;
    if (name == '') {
      valid = false;
      setBadName(true);
    } else if (name != '') {
      setBadName(false);
    }
    if (mobile == '') {
      valid = false;
      setBadMobile(true);
    } else if (mobile.length < 10) {
      setBadMobile(false);
    } else if (mobile != '') {
      setBadMobile(false);
    }
    return valid;
  };
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
        valid={!badName}
        onChangeText={(txt: string) => {
          setName(txt);
        }}
        maxLength={30}
        disabled={false}
      />
      {badName && (
        <Text
          style={{
            color: 'red',
            marginVertical: 4,
            alignSelf: 'flex-start',
            marginLeft: 26,
          }}>
          Please enter name
        </Text>
      )}
      <CommonTextInput
        placeholder="Enter Mobile"
        keyboardType={'number-pad'}
        value={mobile}
        onChangeText={(txt: string) => {
          setMobile(txt);
        }}
        valid={!badMobile}
        maxLength={10}
        disabled={false}
      />
      {badMobile && (
        <Text
          style={{
            color: 'red',
            marginVertical: 4,
            alignSelf: 'flex-start',
            marginLeft: 26,
          }}>
          Please enter mobile
        </Text>
      )}
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
        }}
        onPress={() => validate()}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Components;

const styles = StyleSheet.create({});
