import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {usersData} from './Data';
import ChildScreen from './ChildScreen';

const SelectionMain = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <FlatList
        data={usersData}
        contentContainerStyle={{paddingBottom: 20}}
        renderItem={({item, index}: any) => {
          return <ChildScreen item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default SelectionMain;

const styles = StyleSheet.create({});
