import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {cartData} from '../assets/data';
interface Props {
  navigation: any;
  route: any;
}
const CartDetails: React.FC<Props> = ({navigation, route}) => {
  const id = route.params.cartId;
  const selectedCart = cartData.find(element => {
    return id === element.id;
  });
  const [heartSelected, setheartSelected] = useState<boolean>(false);
  return (
    <View style={{backgroundColor: '#fff', flex: 1, padding: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flex: 4}}>
          <Text style={{color: 'black'}}>{selectedCart.title}</Text>
          <Text style={{color: 'black'}}>{selectedCart.id}</Text>

          <Text style={{color: 'black'}}>{selectedCart.description}</Text>
          <Text style={{color: 'black'}}>{selectedCart.rating}</Text>
          <Text style={{color: 'black'}}>{selectedCart.faqs}</Text>
          <Text style={{color: 'black'}}>{selectedCart.info}</Text>
          <Text style={{color: 'black'}}>{selectedCart.reviews}</Text>
        </View>
        <View style={{flex: 2}}>
          <Image
            source={selectedCart.image}
            style={{height: 120, width: 120}}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            borderRadius: 4,
            marginTop: 4,
            width: 60,
          }}
          activeOpacity={0.2}>
          <Text
            style={{
              padding: 4,
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
            Add
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'tomato',
            borderRadius: 4,
            marginTop: 4,
            marginLeft: 6,
            width: 80,
          }}
          activeOpacity={0.2}>
          <Text
            style={{
              padding: 4,
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 4,
            marginLeft: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={0.2}
          onPress={() => setheartSelected(!heartSelected)}>
          <Image
            source={
              heartSelected
                ? require('../assets/images/fullHeart.png')
                : require('../assets/images/heart.png')
            }
            style={{
              height: 24,
              width: 24,
              tintColor: heartSelected ? 'tomato' : 'black',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartDetails;

const styles = StyleSheet.create({});
