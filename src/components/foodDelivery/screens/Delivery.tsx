import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {featured} from '../data';
import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';
import {themeColors} from '../theme';
import Loading from './Loading';
const latitude = 18.7357;
const longitude = 73.6753;
const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
const Delivery = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{flex: 1, paddingTop: 30, backgroundColor: '#fff'}}>
      {isLoading && <Loading />}
      <WebView
        source={{uri: mapUrl}}
        style={{flex: 1}}
        onLoad={() => setIsLoading(false)}
        onLoadEnd={() => setIsLoading(false)}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 110,
          left: 16,
        }}
        activeOpacity={0.6}
        onPress={() => navigation.goBack()}>
        <Image
          style={{
            height: 40,
            width: 40,
          }}
          source={require('../../../assets/images/undo.png')}
        />
      </TouchableOpacity>
      <View
        style={{
          position: 'relative',
          bottom: 0,
          backgroundColor: themeColors.bgColor(0.2),
          // marginTop: 36,
          borderRadius: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingTop: 30,
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'rgb(30,30,40)',
              }}>
              Estimated Arrival
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 2,
                color: 'rgb(30,30,50)',
              }}>
              20-30 Minutes
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: 'rgb(30,30,40)',
              }}>
              Your order is own its way!
            </Text>
          </View>
          <Image
            source={require('../assets/images/deliveryGif.png')}
            style={{height: 48, width: 48, marginRight: 20}}
          />
        </View>
        <View
          style={{
            backgroundColor: themeColors.bgColor(0.8),
            padding: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 50,
            marginVertical: 25,
            marginHorizontal: 6,
            overflow: 'hidden',
          }}>
          <View
            style={{
              margin: 3,
              padding: 3,
              borderRadius: 50,
              backgroundColor: 'rgba(255,255,255,0.4)',
              overflow: 'hidden',
            }}>
            <Image
              source={require('../assets/images/deliveryGif.png')}
              style={{height: 48, width: 48}}
            />
          </View>
          <View style={{marginLeft: 9, flex: 1}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14}}>
              Rushi Bhumkar
            </Text>
            <Text style={{color: '#fff', fontSize: 13}}>Your Rider</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', margin: 9}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                padding: 6,
                marginHorizontal: 3,
                borderRadius: 50,
              }}>
              <Image
                source={require('../../../assets/icons/playbtn.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: themeColors.bgColor(1),
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                padding: 6,
                borderRadius: 50,
                marginHorizontal: 3,
              }}
              onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../../assets/icons/playbtn.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: 'red',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({});
