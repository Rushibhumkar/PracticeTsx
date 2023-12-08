import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChildScreen from './screens/ChildScreen';
const ReactHooksStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
        }}
        initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="ChildScreen"
          component={ChildScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ReactHooksStack;

const styles = StyleSheet.create({});
