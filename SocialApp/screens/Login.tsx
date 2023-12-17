import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {sizes} from '../utils/Constants';
import {THEME_COLOR, THEME_COLOR2} from '../utils/Colors';
import CustomTextInput from '../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Loader';
import {BASE_URL, LOGIN_USER} from '../utils/Strings';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState('');
  const [badPassword, setBadPassword] = useState('');
  const [loading, setloading] = useState(false);
  const validate = () => {
    let isValid = false;
    if (email == '') {
      setBadEmail('Please Enter Email');
      isValid = false;
    } else if (
      email !== '' &&
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setBadEmail('Please Enter Valid Email');
    } else if (
      email !== '' &&
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      isValid = true;
      setBadEmail('');
    }
    if (password == '') {
      setBadPassword('Please Enter Password');
      isValid = false;
    } else if (password != '' && password.length < 6) {
      setBadPassword('Please Enter min 6 Character Password');
    } else if (password != '' && password.length > 5) {
      setBadPassword('');
      isValid = true;
    }
    return isValid;
  };

  const login = () => {
    console.log(email + ' ' + password);
    const myHeaders = new Headers();
    myHeaders.append('Content-type', 'application/json');
    fetch(BASE_URL + LOGIN_USER, {
      body: {
        emailId: email,
        password: password,
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(json => {
        setloading(false);
        console.log(json);
      })
      .catch(err => {
        console.log(err);
        setloading(false);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        source={require('../assets/images/chat-box.png')}
        style={{
          height: 100,
          aspectRatio: 1,
          alignSelf: 'center',
          marginTop: sizes.height / 8,
          backgroundColor: '#fff',
        }}
      />
      <Text
        style={{
          color: '#000',
          alignSelf: 'center',
          fontSize: 30,
          marginTop: 16,
        }}>
        Welcome Back
      </Text>
      <Text style={{color: '#000', alignSelf: 'center', fontSize: 30}}>
        to{' '}
        <Text
          style={{
            color: THEME_COLOR,
            alignSelf: 'center',
            fontSize: 30,
            fontWeight: '600',
          }}>
          Sosal
        </Text>
      </Text>
      <CustomTextInput
        sercurityKey={false}
        placeholder={'Enter Email...'}
        icon={'https://cdn-icons-png.flaticon.com/128/546/546394.png'}
        value={email}
        onChangeText={(txt: string) => setEmail(txt)}
        isValid={badEmail == '' ? true : false}
      />
      {badEmail != '' && (
        <Text style={{color: 'red', marginLeft: 20, marginTop: 5}}>
          {badEmail}
        </Text>
      )}
      <CustomTextInput
        sercurityKey={true}
        placeholder={'Enter Password...'}
        icon={'https://cdn-icons-png.flaticon.com/128/3257/3257787.png'}
        value={password}
        onChangeText={(txt: string) => setPassword(txt)}
        isValid={badPassword == '' ? true : false}
      />
      {badPassword != '' && (
        <Text style={{color: 'red', marginLeft: 20, marginTop: 5}}>
          {badPassword}
        </Text>
      )}

      <LinearGradient
        colors={[THEME_COLOR, THEME_COLOR2]}
        style={{
          width: '90%',
          height: 50,
          borderRadius: 16,
          alignSelf: 'center',
          marginTop: 36,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            validate();
            // if (validate()) {
            //   login();
            // }
          }}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>
            Login
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text
        style={{
          color: '#000',
          fontSize: 14,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: 16,
          padding: 12,
        }}
        onPress={() => navigation.navigate('SignUp')}>
        Create New Account ?{' '}
        <Text style={{color: '#102080', fontSize: 14, fontWeight: 'bold'}}>
          Sign Up
        </Text>
      </Text>
      <Loader visible={loading} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
