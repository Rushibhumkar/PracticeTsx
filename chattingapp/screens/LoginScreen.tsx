import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
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
              Sign In
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 17,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Sign In to Your Account
            </Text>
          </View>
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
                email
              </Text>
              <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Enter email..."
                placeholderTextColor={'grey'}
                style={{
                  color: '#000',
                  fontSize: 12,
                  paddingHorizontal: 8,
                  borderColor: 'grey',
                  borderRadius: 8,
                  borderWidth: 0.4,
                }}
              />
            </View>
          </View>
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
                  color: '#000',
                  fontSize: 12,
                  paddingHorizontal: 8,
                  borderColor: 'grey',
                  borderRadius: 8,
                  borderWidth: 0.4,
                }}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#4A55A2',
                padding: 10,
                marginTop: 100,
                width: 150,
                alignSelf: 'center',
                borderRadius: 8,
              }}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: 15}}
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={{color: 'grey', fontSize: 13, textAlign: 'center'}}>
                Don't have an account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
