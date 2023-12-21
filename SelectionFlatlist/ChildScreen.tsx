import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {usersData} from './Data';

const ChildScreen = ({item, index}) => {
  const [selected, setselected] = useState(false);
  const [tempData, setTempData] = useState([]);
  console.log(tempData);
  return (
    <View
      style={{
        backgroundColor: '#f2f2f2',
        borderRadius: 12,
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
      }}>
      <View style={{width: '85%'}}>
        <Text style={{color: '#000', fontSize: 18, fontWeight: '800'}}>
          {item.id + '  ' + item.name}
        </Text>
        <Text
          style={{
            color: 'rgb(150,150,150)',
            fontSize: 14,
            width: '60%',
          }}>
          {item.address}
        </Text>
      </View>

      <TouchableOpacity
        style={{padding: 8, width: '15%'}}
        onPress={() => {
          setselected(!selected);
          usersData.map((val, ind) => {
            if (ind === index) {
              setTempData(prev => [...prev, val]);
            }
          });
        }}>
        {selected ? (
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828644.png',
            }}
            style={{width: 30, height: 30}}
          />
        ) : (
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/649/649730.png',
            }}
            style={{width: 30, height: 30}}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ChildScreen;

const styles = StyleSheet.create({});
