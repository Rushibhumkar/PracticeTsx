import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
const {height, width} = Dimensions.get('window');
const Loading = () => {
  return (
    <View
      style={{
        height,
        width,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Progress.CircleSnail
        thickness={2}
        size={50}
        duration={600}
        color={'#b57e05'}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
