import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
const RegisterScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const userId: any = uuid.v4();
  // console.log(userId);
  const registerUser = () => {
    firestore()
      .collection('users')
      .doc(userId)
      .set({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        userId: userId,
      })
      .then((res: any) => {
        console.log('user Created');
        ToastAndroid.showWithGravity(
          'account created successfully!',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
        navigation.navigate('LoginScreen');
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const validate = () => {
    let isValid = true;
    if (
      name == '' ||
      email == '' ||
      mobile == '' ||
      password == '' ||
      confirmPassword == '' ||
      confirmPassword !== password ||
      password.length !== 6
    ) {
      isValid = false;
    }

    return isValid;
  };
  console.log('validate', validate());
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
      }}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View
            style={{
              marginTop: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#4A55A2', fontSize: 17, fontWeight: 'bold'}}>
              Register
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 17,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Register to Your Account
            </Text>
          </View>
          {/* <-----name-----> */}
          <View
            style={{
              marginTop: 50,
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#000',
                  position: 'absolute',
                  top: -9,
                  left: 8,
                  zIndex: 10,
                  backgroundColor: '#fff',
                  paddingHorizontal: 4,
                }}>
                name
              </Text>
              <TextInput
                value={name}
                onChangeText={text => setName(text)}
                placeholder="Enter name..."
                placeholderTextColor={'grey'}
                style={{
                  fontSize: 12,
                  paddingHorizontal: 8,
                  color: '#000',
                  borderColor: 'grey',
                  borderRadius: 8,
                  borderWidth: 0.4,
                }}
              />
            </View>
          </View>
          {/* <--------mobile--------> */}
          <View
            style={{
              marginTop: 30,
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#000',
                  position: 'absolute',
                  top: -9,
                  left: 8,
                  zIndex: 10,
                  backgroundColor: '#fff',
                  paddingHorizontal: 4,
                }}>
                mobile
              </Text>
              <TextInput
                value={mobile}
                keyboardType="number-pad"
                onChangeText={text => setMobile(text)}
                placeholder="Enter Mobile..."
                placeholderTextColor={'grey'}
                style={{
                  fontSize: 12,
                  paddingHorizontal: 8,
                  color: '#000',
                  borderColor: 'grey',
                  borderRadius: 8,
                  borderWidth: 0.4,
                }}
              />
            </View>
          </View>
          {/* <--------email--------> */}
          <View
            style={{
              marginTop: 30,
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#000',
                  position: 'absolute',
                  top: -9,
                  left: 8,
                  zIndex: 10,
                  backgroundColor: '#fff',
                  paddingHorizontal: 4,
                }}>
                email
              </Text>
              <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Enter email..."
                placeholderTextColor={'grey'}
                style={{
                  fontSize: 12,
                  paddingHorizontal: 8,
                  color: '#000',
                  borderColor: 'grey',
                  borderRadius: 8,
                  borderWidth: 0.4,
                }}
              />
            </View>
          </View>
          {/* <-------password-----> */}
          <View
            style={{
              marginTop: 30,
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#000',
                  position: 'absolute',
                  top: -9,
                  left: 8,
                  zIndex: 10,
                  backgroundColor: '#fff',
                  paddingHorizontal: 4,
                }}>
                password
              </Text>
              <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Enter password..."
                placeholderTextColor={'grey'}
                // secureTextEntry={true}
                style={{
                  fontSize: 12,
                  paddingHorizontal: 8,
                  color: '#000',
                  borderColor: 'grey',
                  borderRadius: 8,
                  borderWidth: 0.4,
                }}
              />
            </View>
          </View>
          {/* <--------confirmPassword--------> */}
          <View
            style={{
              marginTop: 30,
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#000',
                  position: 'absolute',
                  top: -9,
                  left: 8,
                  zIndex: 10,
                  backgroundColor: '#fff',
                  paddingHorizontal: 4,
                }}>
                confirmPassword
              </Text>
              <TextInput
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                placeholder="confirmPassword..."
                placeholderTextColor={'grey'}
                style={{
                  fontSize: 12,
                  paddingHorizontal: 8,
                  color: '#000',
                  borderColor: 'grey',
                  borderRadius: 8,
                  borderWidth: 0.4,
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              validate()
                ? registerUser()
                : Alert.alert('Please enter valid data')
            }
            activeOpacity={0.8}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4A55A2',
              padding: 10,
              width: 150,
              alignSelf: 'center',
              borderRadius: 8,
              marginTop: 40,
            }}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 10, marginBottom: 40}}
            onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: 'grey',
                fontSize: 13,
                textAlign: 'center',
                paddingVertical: 5,
              }}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
