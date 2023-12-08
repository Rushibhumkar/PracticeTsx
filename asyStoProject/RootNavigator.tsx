import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Contact from './Contact';
import AddContact from './AddContact';
import Intro from './Intro';
import CommonTextInput from './CommonTextInput';
import Components from './Components';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Components">
        <Stack.Screen
          component={Components}
          name="Components"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CommonTextInput}
          name="CommonTextInput"
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          component={Intro}
          name="Intro"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Contact}
          name="Contact"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AddContact}
          name="AddContact"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
