import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './Loading';
import {useIsFocused} from '@react-navigation/native';

const Contact = ({navigation}: any) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    getData();
    setloading(false);
  }, [isFocused]);
  const [contactList, setContactList] = useState([]);
  const [loading, setloading] = useState(true);
  const getData = async () => {
    const contacts = await AsyncStorage.getItem('CONTACT');
    setContactList(JSON.parse(contacts));
  };
  const deleteContact = async index => {
    const selectedData = contactList.filter((item, ind) => {
      console.log(ind != index);
      return ind != index;
    });
    setContactList(selectedData);
    await AsyncStorage.setItem('CONTACT', JSON.stringify(selectedData));
  };
  const logout = async () => {
    await AsyncStorage.setItem('EMAIL', '');
    await AsyncStorage.setItem('PASSWORD', '');
    navigation.navigate('Login');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <FlatList
          data={contactList}
          contentContainerStyle={{paddingBottom: 20, paddingTop: 20}}
          style={{backgroundColor: '#fff'}}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 50,
                  borderWidth: 1,
                  alignSelf: 'center',
                  borderRadius: 8,
                  marginTop: 10,
                  flexDirection: 'row',
                  paddingHorizontal: 16,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 4,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#504060'}}>
                    {item.name.toUpperCase()}
                  </Text>
                  <Text style={{color: '#504060'}}>{item.mobile}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#000',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    marginLeft: 12,
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                  }}
                  activeOpacity={0.8}
                  onPress={() => deleteContact(index)}>
                  <Text style={{color: '#fff'}}>Delete</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#000',
          position: 'absolute',
          bottom: 20,
          left: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.8}
        onPress={() => {
          logout();
        }}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#000',
          position: 'absolute',
          bottom: 20,
          right: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddContact')}>
        <Text style={{color: '#fff'}}>Add New Contact</Text>
      </TouchableOpacity>
      {loading && <Loading />}
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
