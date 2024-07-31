import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

const Noti = () => {
  useEffect(() => {
    let token = messaging().getDidOpenSettingsForNotification();
    console.log(token);
  }, []);
  return (
    <View>
      <Text>Noti</Text>
    </View>
  );
};

export default Noti;

const styles = StyleSheet.create({});
