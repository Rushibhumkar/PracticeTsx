import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const ShowCartItems = () => {
  const item = props.item;
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item: any) => {
    // console.log(item)
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item: any) => {
    // console.warn(item)
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartItems.filter((element: any) => {
      return element.name == item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);
  return (
    <View>
      <Text>ShowCartItems</Text>
    </View>
  );
};

export default ShowCartItems;

const styles = StyleSheet.create({});
