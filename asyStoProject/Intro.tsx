import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 3000);
  }, []);
  const checkLogin = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    const password = await AsyncStorage.getItem('PASSWORD');
    console.log(email, password);
    if (email !== null) {
      navigation.navigate('Contact');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Text style={{fontSize: 20, color: 'red'}}>My Contact App</Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({});
