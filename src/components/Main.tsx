import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './Cart';
import CartDetails from './CartDetails';
import CartOptions from './CartOptions';
import AddAddress from './AddAddress';
import Home from './Home';
import MyAddress from './MyAddress';
const Stack = createNativeStackNavigator();
const Main: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'slide_from_right',
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#00A659'},
      }}
      initialRouteName="CartDetails">
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="MyAddress" component={MyAddress} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CartDetails" component={CartDetails} />
      <Stack.Screen name="CartOptions" component={CartOptions} />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
