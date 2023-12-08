import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const ChildScreen = ({navigatio, todos, addTodo}: any) => {
  console.log('renderchild');
  return (
    <View style={{marginTop: 20}}>
      <Text style={{color: '#000', textAlign: 'center'}}>ChildScreen</Text>
      {todos.map((item: any, index: any) => {
        return (
          <Text key={index} style={{color: 'red'}}>
            {item}
          </Text>
        );
      })}
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          alignSelf: 'center',
          padding: 8,
          borderRadius: 6,
          marginTop: 20,
        }}
        onPress={addTodo}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChildScreen;

const styles = StyleSheet.create({});
