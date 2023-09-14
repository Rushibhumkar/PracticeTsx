import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
  }, []);

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
