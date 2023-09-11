import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './src/components/foodDelivery/redux/store';
import StackNavigator from './chattingapp/StackNavigator';
const App = () => {
  return (
    // <Provider store={store}>
    //   <GestureHandlerRootView style={{flex: 1}}>
    //     {/* <BottomSheet /> */}
    //     {/* Other app content */}
    //     <MainNavigation />
    //   </GestureHandlerRootView>
    // </Provider>
    <>
      <StackNavigator />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
