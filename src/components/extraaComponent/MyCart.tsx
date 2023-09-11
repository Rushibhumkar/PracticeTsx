import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
interface Props {
  navigation: any;
}
const cartItems = [];
const MyCart: React.FC<Props> = ({navigation}) => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <View>
      <Text>MyCart</Text>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.6}
        onPress={() => navigation.goBack({cartItems})}>
        <Text style={styles.btnTxt}>GoToMyCart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'green',
    borderRadius: 4,
    marginTop: 4,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    alignSelf: 'center',
  },
  btnTxt: {
    padding: 4,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
