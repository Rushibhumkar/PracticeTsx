import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeComp from './movieApp/HomeComp';
import MovieScreen from './movieApp/MovieScreen';
import PersonScreen from './movieApp/PersonScreen';
import SearchScreen from './movieApp/SearchScreen';
import {useNavigation} from '@react-navigation/native';
import Home from './foodDelivery/screens/Home';
import Restaurant from './foodDelivery/screens/Restaurant';
import CartScreen from './foodDelivery/screens/CartScreen';
import Delivery from './foodDelivery/screens/Delivery';
const Stack = createNativeStackNavigator();
const Main: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerShadowVisible: true,
        headerStyle: {backgroundColor: '#00A659'},
      }}
      initialRouteName="Home">
      {/* <------this is for movie app-------> */}
      {/* <Stack.Screen name="HomeComp" component={HomeComp} />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} /> */}
      {/* <------movie app close-------> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen
        name="Delivery"
        options={{
          presentation: 'containedModal',
          animation: 'slide_from_bottom',
        }}
        component={Delivery}
      />
      <Stack.Screen
        name="CartScreen"
        options={{
          presentation: 'containedModal',
          animation: 'slide_from_bottom',
        }}
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
