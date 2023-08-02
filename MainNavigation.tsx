import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/components/Main';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
