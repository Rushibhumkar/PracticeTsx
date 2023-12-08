import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const saveEmailPass = async () => {
    try {
      await AsyncStorage.setItem('EMAIL', String(email));
      await AsyncStorage.setItem('PASSWORD', String(password));
      navigation.navigate('Contact');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 20,
          marginTop: 200,
          marginBottom: 20,
          fontWeight: '600',
          color: '#000',
        }}>
        Login
      </Text>
      <TextInput
        placeholder="enter email id..."
        placeholderTextColor={'grey'}
        value={email}
        onChangeText={(txt: any) => setEmail(txt)}
        style={{
          color: '#000',
          width: '90%',
          height: 50,
          alignSelf: 'center',
          borderWidth: 0.2,
          paddingLeft: 20,
          borderRadius: 8,
          marginTop: 40,
        }}
      />
      <TextInput
        placeholder="enter password..."
        placeholderTextColor={'grey'}
        value={password}
        onChangeText={(txt: any) => setPassword(txt)}
        style={{
          color: '#000',
          width: '90%',
          height: 50,
          alignSelf: 'center',
          borderWidth: 0.2,
          paddingLeft: 20,
          borderRadius: 8,
          marginTop: 40,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          height: 50,
          borderRadius: 50,
          alignSelf: 'center',
          width: '90%',
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.8}
        onPress={() => {
          saveEmailPass();
        }}>
        <Text style={{fontSize: 14, fontWeight: '600', color: '#fff'}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
