import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Page content</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'red',
  },
});

export default Main;
