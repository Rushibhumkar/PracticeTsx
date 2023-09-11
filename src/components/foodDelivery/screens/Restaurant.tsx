import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import DishRow from '../components/DishRow';
import {categories} from '../data';
import CartIcon from '../components/CartIcon';
interface Props {}
const Restaurant: React.FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#fff'}}>
        <StatusBar
          barStyle={'dark-content'}
          translucent={true}
          backgroundColor="transparent"
          animated={true}
        />
        <View
          style={{
            position: 'relative',
            backgroundColor: '#fff',
          }}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/slice-fresh-piz…pepperoni-white_144627-24389.jpg?size=626&ext=jpg',
            }}
            style={{
              height: 256,
              width: '100%',
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 42,
              left: 12,
              padding: 6,
            }}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/images/undo.png')}
              style={{
                height: 34,
                width: 34,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,0.5)',
            marginTop: 0,
            paddingTop: 18,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: 'rgb(30,30,50)',
              marginLeft: 12,
            }}>
            Rushikesh
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 3,
              marginLeft: 12,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/images/fullstar.png')}
                style={{
                  height: 16,
                  width: 16,
                  resizeMode: 'contain',
                }}
              />
              <Text>
                <Text style={{color: 'green', fontSize: 12}}>{' ' + 4}</Text>
                <Text style={{color: 'grey', fontSize: 12}}>
                  (4.3k review) •
                  <Text style={{color: 'grey', fontSize: 12}}>Category</Text>
                </Text>
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 4,
              }}>
              <Image
                style={{height: 16, width: 16, tintColor: 'grey'}}
                source={require('../assets/images/maps.png')}
              />
              <Text style={{color: 'grey', fontSize: 12, marginLeft: 3}}>
                Nearby • address here
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: 'grey',
              marginTop: 6,
              fontSize: 13,
              paddingLeft: 12,
            }}>
            this is the description line
          </Text>
        </View>
        <View style={{paddingBottom: 108, backgroundColor: '#fff'}}>
          <Text
            style={{
              paddingHorizontal: 12,
              paddingVertical: 12,
              fontSize: 18,
              fontWeight: 'bold',
              color: 'rgb(30,30,50)',
            }}>
            Menu
          </Text>
          {/* <-------Dishesh-------> */}
          {categories.map((dish: any, index: any) => (
            <DishRow item={dish} key={index} index={index} />
          ))}
        </View>
        <CartIcon />
      </ScrollView>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({});
