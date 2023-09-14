import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
useEffect(() => {
  GoogleSignin.configure();
}, []);

const GoogleSignScreen = () => {
  return (
    <View>
      <Text>GoogleSignScreen</Text>
    </View>
  );
};

export default GoogleSignScreen;

const styles = StyleSheet.create({});
