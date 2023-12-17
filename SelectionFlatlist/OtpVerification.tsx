import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const OtpVerification = () => {
  const [getOtp, setGetOtp] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/9042/9042592.png',
        }}
        style={{height: 80, width: 80}}
      />
      <Text
        style={{
          color: '#000',
          fontSize: 28,
          fontWeight: '900',
          marginVertical: 20,
          letterSpacing: 1,
        }}>
        Verification
      </Text>
      <Text
        style={{
          color: 'rgb(160,160,170)',
          fontSize: 14,
          marginVertical: 20,
          alignSelf: 'center',
          width: '80%',
          textAlign: 'center',
        }}>
        {getOtp
          ? 'You will get a otp via SMS'
          : ' We will send you a One Time Password on your phone number'}
      </Text>
      <TextInput
        placeholder={getOtp ? 'Enter OTP here' : 'Enter Mobile Number'}
        style={{
          borderWidth: 0.6,
          borderColor: '#000',
          width: '90%',
          alignSelf: 'center',
          marginTop: 40,
          marginBottom: 20,
          borderRadius: 12,
          textAlign: 'center',
          color: '#000',
        }}
        secureTextEntry={true}
        placeholderTextColor={'rgb(160,160,170)'}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#5dcf72',
          width: '90%',
          alignSelf: 'center',
          padding: 16,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.8}
        onPress={() => setGetOtp(!getOtp)}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>
          {getOtp ? 'VERIFY' : 'GET OTP'}
        </Text>
      </TouchableOpacity>
      {getOtp && (
        <Text style={{color: 'rgb(150,150,150)', marginTop: 12}}>
          Don't receive the Verification OTP?{' '}
          <Text style={{color: '#721aed', fontWeight: 'bold'}}>Resend OTP</Text>
        </Text>
      )}
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({});
