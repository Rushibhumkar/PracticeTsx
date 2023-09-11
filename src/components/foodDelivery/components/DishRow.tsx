import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {themeColors} from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/action';
interface Props {
  item: any;
  index: number | string;
}
const DishRow: React.FC<Props> = ({item, index}) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (element: any) => {
    // console.log(item)
    dispatch(addToCart(element));
  };
  const handleRemoveFromCart = (element: any) => {
    // console.warn(item)
    dispatch(removeFromCart(element.name));
  };

  useEffect(() => {
    let result = cartItems.filter((element: any) => {
      return element.name == element.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{uri: item.image}}
        style={{height: 100, width: 100, borderRadius: 18}}
      />
      <View style={{display: 'flex', flex: 1, marginHorizontal: 4}}>
        <View style={{paddingLeft: 3}}>
          <Text style={{fontSize: 18, color: 'rgb(30,30,50)'}}>
            {item.name}
          </Text>
          <Text style={{color: 'grey', fontSize: 13}}>this is description</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
            ${25}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                padding: 3,
              }}
              onPress={() => handleAddToCart(item)}>
              <Image
                source={require('../assets/images/minus.png')}
                style={styles.minusIcon}
              />
            </TouchableOpacity>
            <Text style={{paddingHorizontal: 8, color: 'rgb(30,30,40)'}}>
              {2}
            </Text>
            <TouchableOpacity
              style={{
                padding: 3,
              }}>
              <Image
                source={require('../assets/images/plus.png')}
                style={styles.plusIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    marginHorizontal: 6,
    borderRadius: 18,
    shadowColor: 'grey',
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 10,
  },
  plusIcon: {
    height: 26,
    width: 26,
    tintColor: themeColors.bgColor(1),
  },
  minusIcon: {
    height: 26,
    width: 26,
    tintColor: themeColors.bgColor(1),
  },
});
