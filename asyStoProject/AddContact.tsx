import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddContact = ({navigation, useIsFocused}: any) => {
  interface Contact {
    name: string;
    mobile: string;
  }
  let contacts: Contact[] = [];
  const [name, setname] = useState('');
  const [mobile, setmobile] = useState('');
  const saveContact = async () => {
    let tempContact = [];
    let contacts = [];
    let x = JSON.parse(await AsyncStorage.getItem('CONTACT'));
    tempContact = x;
    tempContact.map(item => {
      contacts.push(item);
    });
    console.log(contacts);
    contacts.push({name: name, mobile: mobile});
    await AsyncStorage.setItem('CONTACT', JSON.stringify(contacts));
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 20,
          marginTop: 200,
          marginBottom: 20,
          fontWeight: '600',
          color: '#000',
        }}>
        Add New Contact
      </Text>
      <TextInput
        placeholder="Enter name..."
        placeholderTextColor={'grey'}
        value={name}
        onChangeText={(txt: any) => setname(txt)}
        style={{
          color: '#000',
          width: '90%',
          height: 50,
          alignSelf: 'center',
          borderWidth: 0.2,
          paddingLeft: 20,
          borderRadius: 8,
          marginTop: 40,
        }}
      />
      <TextInput
        placeholder="Enter mobile..."
        placeholderTextColor={'grey'}
        value={mobile}
        onChangeText={(txt: any) => setmobile(txt)}
        keyboardType="number-pad"
        style={{
          color: '#000',
          width: '90%',
          height: 50,
          alignSelf: 'center',
          borderWidth: 0.2,
          paddingLeft: 20,
          borderRadius: 8,
          marginTop: 40,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          height: 50,
          borderRadius: 50,
          alignSelf: 'center',
          width: '90%',
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.8}
        onPress={() => saveContact()}>
        <Text style={{fontSize: 14, fontWeight: '600', color: '#fff'}}>
          Save Contact
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddContact;

const styles = StyleSheet.create({});
