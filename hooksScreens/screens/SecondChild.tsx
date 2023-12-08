import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SecondChild = ({addUser, user}) => {
  console.log('secondscreenrender');
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          alignSelf: 'center',
          padding: 8,
          borderRadius: 6,
          marginTop: 20,
        }}
        onPress={addUser}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Add user</Text>
      </TouchableOpacity>
      {user.map((item, index) => {
        return (
          <Text style={{color: 'red', textAlign: 'center'}} key={index}>
            {item}
          </Text>
        );
      })}
    </View>
  );
};

export default SecondChild;

const styles = StyleSheet.create({});
