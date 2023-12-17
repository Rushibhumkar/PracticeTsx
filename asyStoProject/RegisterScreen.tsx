import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  useWindowDimensions,
  Dimensions,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

const RegisterScreen = () => {
  const {height, width} = Dimensions.get('window');
  const [switchInput, setswitchInput] = useState('phone');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar
          translucent={true}
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_Lenkvpyq4WLr410jx2D0nLGVMvZfY9bg-r5Kgtubg&s',
          }}
          style={{
            width: '100%',
            height: 300,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingVertical: 16,
            paddingHorizontal: 16,
          }}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 12,
            }}>
            India's #1 Tiffin Delivery and Food Delivery App
          </Text>
          <View style={{marginVertical: 8}}>
            <View
              style={{
                height: 0.6,
                borderRadius: 4,
                width: '100%',
                backgroundColor: 'grey',
                marginTop: 12,
              }}
            />
            <Text
              style={{
                position: 'relative',
                top: -23,
                textAlign: 'center',
                marginTop: 12,
                color: 'grey',
                paddingHorizontal: 4,
                backgroundColor: '#fff',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Log in or sign up
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              height: 60,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                marginRight: 5,
                borderRadius: 10,
                flex: 0.2,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={
                  switchInput === 'phone'
                    ? {
                        uri: 'https://cdn-icons-png.flaticon.com/128/3415/3415074.png',
                      }
                    : {
                        uri: 'https://cdn-icons-png.flaticon.com/128/546/546394.png',
                      }
                }
                style={{
                  aspectRatio: 1,
                  height: '70%',
                }}
              />
            </View>
            <View style={{position: 'relative', flex: 0.8, height: '100%'}}>
              <TextInput
                placeholder={
                  switchInput === 'phone' ? ' Phone number' : 'Email'
                }
                placeholderTextColor={'grey'}
                maxLength={10}
                keyboardType="phone-pad"
                autoCapitalize="none"
                style={{
                  borderColor: 'grey',
                  borderWidth: 1,
                  color: '#000',
                  paddingHorizontal: 10,
                  height: 60,
                  fontSize: 16,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: '#00000070',
                  position: 'absolute',
                  top: 5,
                  left: 10,
                  fontSize: 12,
                }}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#00b86c',
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}
            activeOpacity={0.8}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                alignSelf: 'center',
                fontWeight: '800',
              }}>
              Continue
            </Text>
          </TouchableOpacity>
          <View style={{marginVertical: 8}}>
            <View
              style={{
                height: 0.6,
                borderRadius: 4,
                width: '100%',
                backgroundColor: 'grey',
                marginTop: 22,
              }}
            />
            <Text
              style={{
                position: 'relative',
                top: -23,
                textAlign: 'center',
                marginTop: 12,
                color: 'grey',
                paddingHorizontal: 4,
                backgroundColor: '#fff',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              or
            </Text>
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                width: '80%',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                padding: 12,
                marginBottom: 12,
              }}>
              <TouchableOpacity
                style={{
                  padding: 12,
                  borderColor: '#000',
                  borderWidth: 0.8,
                  borderRadius: 50,
                }}
                activeOpacity={0.8}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png',
                  }}
                  style={{height: 28, width: 28}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 12,
                  borderColor: '#000',
                  borderWidth: 0.8,
                  borderRadius: 50,
                }}
                onPress={() =>
                  switchInput === 'email'
                    ? setswitchInput('phone')
                    : setswitchInput('email')
                }
                activeOpacity={0.8}>
                <Image
                  source={
                    switchInput === 'phone'
                      ? {
                          uri: 'https://cdn-icons-png.flaticon.com/128/546/546394.png',
                        }
                      : {
                          uri: 'https://cdn-icons-png.flaticon.com/128/3415/3415074.png',
                        }
                  }
                  style={{height: 28, width: 28}}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: 'grey',
                textAlign: 'center',
                fontSize: 12,
                fontWeight: 'bold',
                paddingHorizontal: 16,
                position: 'absolute',
                bottom: 20,
              }}>
              By continuing, you agree to our Terms of Service Privacy Policy
              Content Policy
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
