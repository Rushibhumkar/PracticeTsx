import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './MainNavigation';
import {store} from './src/components/redux/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
