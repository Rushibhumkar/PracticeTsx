import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

interface CartItem {
  id: string;
  image: any;
  description: string;
  title: string;
}

const CartOptions: React.FC<CartItem> = ({id, image, description, title}) => {
  const navigation = useNavigation();
  const [heartSelected, setheartSelected] = useState<boolean>(false);

  return (
    <View
      style={{
        borderWidth: 0.8,
        borderRadius: 6,
        borderColor: 'black',
        marginTop: 20,
        marginHorizontal: 20,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
      }}
      key={id}>
      <View>
        <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
          {title}
        </Text>
        <Text style={{color: 'grey', fontSize: 14}}>{description}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{backgroundColor: 'green', borderRadius: 4, marginTop: 4}}
            activeOpacity={0.2}>
            <Text
              style={{
                padding: 4,
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold',
                textTransform: 'uppercase',
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
            }}
            activeOpacity={0.2}>
            <Text
              style={{
                padding: 4,
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold',
                textTransform: 'uppercase',
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
        <TouchableOpacity
          onPress={() => navigation.navigate('CartDetails', {cartId: id})}
          style={{marginTop: 10}}
          activeOpacity={0.2}>
          <Text
            style={{
              fontSize: 14,
              textDecorationLine: 'underline',
              color: 'blue',
            }}>
            Show Details &#8964;
          </Text>
        </TouchableOpacity>
      </View>
      <Image source={image} style={{height: 100, width: 100}} />
    </View>
  );
};

export default CartOptions;

const styles = StyleSheet.create({});
