import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAddress} from './redux/actions/Action';
let addressList = [];
const MyAddress = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const addressList = useSelector((state: any) => state.AddressReducer);
  //   useEffect(() => {}, [isFocused]);
  console.log(addressList);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddAddress')}
        style={{
          borderColor: '#000',
          borderWidth: 0.5,
          borderRadius: 8,
          width: 160,
          alignSelf: 'center',
          backgroundColor: 'black',
          marginTop: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            color: '#fff',
            padding: 10,
          }}>
          AddAddress
        </Text>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
        <FlatList
          data={addressList}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  borderColor: '#000',
                  borderWidth: 0.5,
                  borderRadius: 6,
                  justifyContent: 'space-between',
                }}>
                <View style={{}}>
                  <Text
                    style={{
                      color: '#000',
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                    }}>
                    City : {item.city}
                  </Text>
                  <Text
                    style={{
                      color: '#000',
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                    }}>
                    Building : {item.building}
                  </Text>
                  <Text
                    style={{
                      color: '#000',
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                    }}>
                    Pincode : {item.pinCode}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => dispatch(deleteAddress(index))}
                  style={{
                    borderColor: '#000',
                    borderWidth: 0.5,
                    borderRadius: 8,
                    width: 160,
                    alignSelf: 'center',
                    backgroundColor: 'black',
                    marginRight: 8,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: '#fff',
                      padding: 10,
                    }}>
                    Delete Address
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({});
