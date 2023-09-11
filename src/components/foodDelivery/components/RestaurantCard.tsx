import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {themeColors} from '../theme';
interface Props {
  item: any;
  index: any;
}

const RestaurantCard: React.FC<Props> = ({item, index}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('Restaurant')}
      key={index}>
      <View
        style={{
          marginBottom: 8,
          marginRight: 12,
          backgroundColor: '#fff',
          borderRadius: 16,
          overflow: 'hidden',
          shadowColor: themeColors.bgColor(1),
          shadowOpacity: 20,
          shadowRadius: 2,
          elevation: 5,
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            height: 160,
            width: 260,
          }}
        />
        <View style={{paddingHorizontal: 9, paddingVertical: 8}}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/images/fullstar.png')}
              style={styles.starImg}
            />
            <Text>
              <Text style={{color: 'green', fontSize: 12}}>
                {' ' + item.stars}
              </Text>
              <Text style={{color: 'grey', fontSize: 12}}>
                ({item.reviews} review) •
                <Text style={{color: 'grey', fontSize: 12}}>
                  {' ' + item.category}
                </Text>
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
              Nearby • {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  title: {
    color: 'rgb(30,30,60)',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 6,
  },
  starImg: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },
});
