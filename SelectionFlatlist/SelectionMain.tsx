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

const SelectionMain = () => {
  const [users, setusers] = useState(usersData);
  const [selected, setselected] = useState(false);

  const onchangeValue = (itemSelected, index) => {
    const newData = users.map(item => {
      if (item.id == itemSelected.id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return {
        ...item,
        selected: item.selected,
      };
    });
    setusers(newData);
  };

  const onShowItemSelected = () => {
    console.log(
      users.filter(item => {
        item.selected == true;
      }),
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <FlatList
        data={users}
        contentContainerStyle={{paddingBottom: 20}}
        renderItem={({item, index}: any) => {
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
                  onchangeValue(item, index);
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
        }}
      />
    </View>
  );
};

export default SelectionMain;

const styles = StyleSheet.create({});
