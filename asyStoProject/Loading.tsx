import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

const Loading = () => {
  const {height, width} = Dimensions.get('window');
  return (
    <View
      style={{
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000050',
        flex: 1,
      }}>
      <ActivityIndicator color={'red'} size={'large'} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
