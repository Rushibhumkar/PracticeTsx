import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    Image: 'https://cdn-icons-png.flaticon.com/128/1634/1634155.png',
  },
  {
    title: 'Sides',
    Image: 'https://cdn-icons-png.flaticon.com/128/3121/3121773.png',
  },
  {
    title: 'Drinks',
    Image: 'https://cdn-icons-png.flaticon.com/128/13479/13479367.png',
  },
  {
    title: 'Desserts',
    Image: 'https://cdn-icons-png.flaticon.com/128/1148/1148842.png',
  },
];
const Home = () => {
  const [whichSelected, setWhichSelected] = useState(0);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000010',
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
          flexWrap: 'wrap',
          padding: 12,
        }}>
        {DATA.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              height: 200,
              width: '45%',
              backgroundColor: 'grey',
              borderRadius: 8,
              borderWidth: whichSelected == index ? 2 : 0,
              borderColor: whichSelected == index ? '#000' : '#fff',
            }}
            onPress={() => setWhichSelected(index)}>
            <Text style={{color: '#fff', textAlign: 'center', marginTop: 8}}>
              {item.title}
            </Text>
            <Image
              source={{uri: item.Image}}
              style={{
                height: 50,
                width: 50,
                alignSelf: 'center',
                marginTop: 12,
              }}
            />
            <Text
              style={{
                backgroundColor: 'green',
                borderRadius: 8,
                padding: 8,
                textAlign: 'center',
                alignSelf: 'center',
                marginTop: 12,
                color: '#fff',
              }}>
              Selected
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;
