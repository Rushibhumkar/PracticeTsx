import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';

const RNVideos = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor="#6A5ACD"
        barStyle={'light-content'}
      />
      <View
        style={{
          height: 44,
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#6A5ACD',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View
          style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginLeft: 125,
            color: '#fff',
          }}>
          Print-X
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text
          style={[
            styles.text2,
            {
              marginTop: 25,
              marginBottom: 10,
              paddingHorizontal: 15,
              paddingVertical: 8,
            },
          ]}>
          Scan Nearby Store
        </Text>
        <View
          style={{
            height: 40,
            width: 170,
            backgroundColor: '#6A5ACD',
            marginTop: 25,
            marginBottom: 10,
            borderRadius: 8,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#fff',
              marginLeft: 10,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            &uarr;
          </Text>
          <Text
            style={{
              color: '#fff',
              marginLeft: 12,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Upload Docs
          </Text>
        </View>
        <View style={{marginTop: 25, flexDirection: 'row', marginBottom: 10}}>
          <Text
            style={{
              backgroundColor: '#6A5ACD',
              color: '#fff',
              borderRadius: 6,
              padding: 8,
              fontWeight: 'bold',
              marginRight: 5,
              borderWidth: 2,
              borderColor: '#000',
            }}>
            Color Xerox
          </Text>
          <Text
            style={{
              backgroundColor: '#6A5ACD',
              color: '#fff',
              borderRadius: 6,
              padding: 8,
              fontWeight: 'bold',
              marginLeft: 5,
            }}>
            Black&White
          </Text>
        </View>
        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#000'}}>
            Page No :
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'grey',
              marginLeft: 4,
            }}>
            form :
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderColor: 'grey',
              borderWidth: 0.8,
              borderRadius: 4,
              marginLeft: 4,
            }}>
            01
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'grey',
              marginLeft: 4,
            }}>
            to :
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderColor: 'grey',
              borderWidth: 0.8,
              borderRadius: 4,
              marginLeft: 4,
            }}>
            10
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 25,
            marginBottom: 10,
            justifyContent: 'space-around',
          }}>
          <Text
            style={[styles.textStyle, {borderColor: '#000', borderWidth: 2}]}>
            ALL
          </Text>
          <Text style={styles.textStyle}>ODD</Text>
          <Text style={styles.textStyle}>EVEN</Text>
          <Text style={styles.textStyle}>MANUALLY</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 25, marginBottom: 10}}>
          <Text style={styles.text2}>1 Side</Text>
          <Text style={[styles.text2, {borderColor: '#000', borderWidth: 2}]}>
            2 Sided
          </Text>
        </View>
        <View style={{marginTop: 25}}>
          <Text
            style={[
              styles.text2,
              {paddingVertical: 10, paddingHorizontal: 16},
            ]}>
            Continue to Payment
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RNVideos;

const styles = StyleSheet.create({
  line: {
    height: 4,
    width: 26,
    backgroundColor: '#fff',
    borderRadius: 2,
    marginVertical: 2,
  },
  textStyle: {
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#6A5ACD',
    fontSize: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  text2: {
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#6A5ACD',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 6,
    marginHorizontal: 8,
  },
});
