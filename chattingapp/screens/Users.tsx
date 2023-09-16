import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Users = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'purple', fontSize: 18, fontWeight: 'bold'}}>
          RN Firebase Chat App
        </Text>
      </View>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 10,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
