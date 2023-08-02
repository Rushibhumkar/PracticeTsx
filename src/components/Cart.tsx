import {
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import React from 'react';
import {cartData} from '../assets/data';
import CartOptions from './CartOptions';

interface CartItem {
  id: string;
  title: string;
  description: string;
  image: any;
}

const Cart: React.FC = ({navigation}: any) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1, margin: 5}}>
      <StatusBar
        backgroundColor={'green'}
        animated={true}
        barStyle={'light-content'}
      />
      <View>
        <FlatList
          data={cartData}
          keyExtractor={(item: CartItem) => item.id}
          renderItem={({item}: {item: CartItem}) => (
            <CartOptions
              id={item.id}
              image={item.image}
              description={item.description}
              title={item.title}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
