import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Splash from './screens/Splash';
import Main from './screens/Main';
import Chat from './screens/Chat';

const ChattingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{animation: 'none'}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            animation: 'slide_from_right',
            headerShown: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ChattingStack;

const styles = StyleSheet.create({});
