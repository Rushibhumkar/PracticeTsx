import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {themeColors} from '../theme';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import {useNavigation} from '@react-navigation/native';
import {featured} from '../data';
interface Props {}
const Home: React.FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      {/* <-----SearchBar--------> */}
      <View style={styles.container}>
        <View style={styles.compartment}>
          <Image
            source={require('../assets/images/magnifying.png')}
            style={{height: 25, width: 25, tintColor: 'rgb(100,100,100)'}}
          />
          <TextInput
            placeholder="Restaurants"
            placeholderTextColor={'grey'}
            style={{marginLeft: 4, flex: 1, fontSize: 14, color: '#000'}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 8,
              borderLeftWidth: 1.34,
              marginVertical: 2,
              borderLeftColor: 'grey',
            }}>
            <Image
              source={require('../assets/images/maps.png')}
              style={{
                height: 24,
                width: 24,
                tintColor: 'rgb(100,100,100)',
                marginLeft: 6,
              }}
            />
            <Text style={{color: 'grey', fontSize: 14}}>New York, NYC</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            padding: 3,
            backgroundColor: themeColors.bgColor(1),
            borderRadius: 50,
            marginLeft: 4,
          }}>
          <Image
            source={require('../assets/images/adjust.png')}
            style={{
              height: 20,
              width: 20,
              tintColor: '#fff',
              margin: 8,
              padding: 4,
            }}
          />
        </TouchableOpacity>
      </View>
      {/* <------Main Content-----> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60}}>
        {/* <------Categories------> */}
        <Categories />
        {/* <------Featured-----> */}
        <View style={{marginTop: 10}}>
          {[featured, featured, featured].map((item: any, index: any) => {
            return (
              <FeaturedRow
                key={index}
                index={index}
                title={item.title}
                description={item.description}
                restaurants={item.restaurants}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 4,
  },
  compartment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 6,
    paddingHorizontal: 6,
    borderColor: 'grey',
    borderRadius: 30,
    borderWidth: 0.6,
  },
});
