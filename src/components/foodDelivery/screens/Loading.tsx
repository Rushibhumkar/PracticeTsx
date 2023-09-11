import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View
      style={{
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <ActivityIndicator animating={true} color={'green'} size={'large'} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
