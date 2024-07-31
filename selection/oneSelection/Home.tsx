import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import CommonFile from './CommonFile';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000010',
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 15,
          flexWrap: 'wrap',
          padding: 12,
        }}>
        <CommonFile
          title={'Drinks'}
          imageUrl={'https://cdn-icons-png.flaticon.com/128/13479/13479367.png'}
          onSelect={() => setSelectedItem('Drinks')}
          isSelected={selectedItem === 'Drinks'}
        />
        <CommonFile
          title={'Sides'}
          imageUrl={'https://cdn-icons-png.flaticon.com/128/3121/3121773.png'}
          onSelect={() => setSelectedItem('Sides')}
          isSelected={selectedItem === 'Sides'}
        />
        <CommonFile
          title={'Main dishes'}
          imageUrl={'https://cdn-icons-png.flaticon.com/128/1634/1634155.png'}
          onSelect={() => setSelectedItem('Main dishes')}
          isSelected={selectedItem === 'Main dishes'}
        />
        <CommonFile
          title={'Desserts'}
          imageUrl={'https://cdn-icons-png.flaticon.com/128/1148/1148842.png'}
          onSelect={() => setSelectedItem('Desserts')}
          isSelected={selectedItem === 'Desserts'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
