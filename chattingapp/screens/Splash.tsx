import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
      CheckLogin();
    }, 2000);
  }, []);
  const CheckLogin = async () => {
    const id = await AsyncStorage.getItem('USERID');
    console.log(id);
    if (id !== null) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('LoginScreen');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Text style={{fontSize: 22, fontWeight: 'bold', color: 'green'}}>
        ChattingApp
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
