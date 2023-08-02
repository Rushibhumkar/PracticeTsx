import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addAddress} from './redux/actions/Action';
import {useNavigation} from '@react-navigation/native';

const AddAddress = () => {
  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [btnDisabled, setBtnDisabled] = useState(true);
  useEffect(() => {
    if (
      city !== '' &&
      building !== '' &&
      pin !== '' &&
      pin.length === 6 &&
      city.length >= 4 &&
      building.length >= 6
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [city, pin, building]);

  return (
    <View style={{paddingVertical: 20}}>
      <View
        style={{
          margin: 10,
          borderWidth: 0.5,
          borderColor: 'grey',
          borderRadius: 8,
          padding: 4,
        }}>
        <TextInput
          placeholder="Enter City Name... "
          value={city}
          onChangeText={text => setCity(text)}
          placeholderTextColor={'grey'}
          style={{color: '#000'}}
        />
      </View>
      <View
        style={{
          margin: 10,
          borderWidth: 0.5,
          borderColor: 'grey',
          borderRadius: 8,
          padding: 4,
        }}>
        <TextInput
          placeholder="Enter Building Name... "
          value={building}
          onChangeText={text => setBuilding(text)}
          placeholderTextColor={'grey'}
          style={{color: '#000'}}
        />
      </View>
      <View
        style={{
          margin: 10,
          borderWidth: 0.5,
          borderColor: 'grey',
          borderRadius: 8,
          padding: 6,
        }}>
        <TextInput
          placeholder="Enter Pincode Name... "
          value={pin}
          onChangeText={text => setPin(text)}
          placeholderTextColor={'grey'}
          inputMode="numeric"
          style={{color: '#000'}}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: btnDisabled ? 'grey' : '#000',
          borderRadius: 8,
          alignSelf: 'center',
          padding: 6,
          marginTop: 20,
          width: 140,
        }}
        activeOpacity={0.6}
        onPress={() => {
          if (city !== '' && pin !== '' && building !== '') {
            dispatch(
              addAddress({city: city, building: building, pinCode: pin}),
            );
            navigation.goBack();
          }
        }}
        disabled={btnDisabled}>
        <Text
          style={{
            color: '#fff',
            fontSize: 14,
            fontWeight: 'bold',
            padding: 4,
            textAlign: 'center',
          }}>
          Save Address
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({});
