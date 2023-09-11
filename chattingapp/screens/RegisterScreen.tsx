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
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const RegisterScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };
    // send POST request to backend API to register user
    fetch('https://chatting-app-backend-0j9y.onrender.com/register', {
      method: 'POST',
      body: JSON.stringify(user),
    })
      .then(res => {
        console.log(res);
        Alert.alert(
          'Registration successfull',
          'You have been registered Successfully!',
        );
        setName('');
        setPassword('');
        setEmail('');
        setImage('');
      })
      .catch(err => {
        Alert.alert(
          'Registration Error',
          'An error occurred while registering',
        );
        console.log('registration failed', err);
      });
  };

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
                secureTextEntry={true}
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
          {/* <--------image--------> */}
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
                image
              </Text>
              <TextInput
                value={image}
                onChangeText={text => setImage(text)}
                placeholder="image..."
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
            onPress={handleRegister}
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
