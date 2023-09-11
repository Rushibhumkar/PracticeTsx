import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Items} from '../../assets/data';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/actions/Action';
interface Props {
  navigation: any;
  id: string;
  image: string;
  description: string;
  title: string;
}
const AddCart: React.FC<Props> = ({
  id,
  image,
  description,
  title,
  navigation,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart([id]));
  };
  return (
    // <View style={{padding: 10}}>
    //   {/* <----------FirstCart---------------> */}
    //   <View style={styles.mainCont}>
    //     <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
    //       {Items.item1.name}
    //     </Text>
    //     <Text style={{color: 'grey', fontSize: 14}}>
    //       {Items.item1.description}
    //     </Text>
    //     <View style={styles.cont}>
    //       <TouchableOpacity
    //         style={styles.addBtn}
    //         activeOpacity={0.6}
    //         onPress={x => dispatch(addToCart(x))}>
    //         <Text style={styles.addTxt}>Add</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.deleteBtn} activeOpacity={0.6}>
    //         <Text style={styles.deleteTxt}>Delete</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   {/* <----------secondCart---------------> */}
    //   <View style={styles.mainCont}>
    //     <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
    //       {Items.item2.name}
    //     </Text>
    //     <Text style={{color: 'grey', fontSize: 14}}>
    //       {Items.item2.description}
    //     </Text>
    //     <View style={styles.cont}>
    //       <TouchableOpacity
    //         style={styles.addBtn}
    //         activeOpacity={0.6}
    //         onPress={x => dispatch(addToCart(x))}>
    //         <Text style={styles.addTxt}>Add</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.deleteBtn} activeOpacity={0.6}>
    //         <Text style={styles.deleteTxt}>Delete</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   {/* <----------thirdcart---------------> */}
    //   <View style={styles.mainCont}>
    //     <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
    //       {Items.item1.name}
    //     </Text>
    //     <Text style={{color: 'grey', fontSize: 14}}>
    //       {Items.item1.description}
    //     </Text>
    //     <View style={styles.cont}>
    //       <TouchableOpacity
    //         style={styles.addBtn}
    //         activeOpacity={0.6}
    //         onPress={x => addToCart(x)}>
    //         <Text style={styles.addTxt}>Add</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.deleteBtn} activeOpacity={0.6}>
    //         <Text style={styles.deleteTxt}>Delete</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   {/* <----------fourthcart---------------> */}
    //   <View style={styles.mainCont}>
    //     <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
    //       {Items.item4.name}
    //     </Text>
    //     <Text style={{color: 'grey', fontSize: 14}}>
    //       {Items.item4.description}
    //     </Text>
    //     <View style={styles.cont}>
    //       <TouchableOpacity
    //         style={styles.addBtn}
    //         activeOpacity={0.6}
    //         onPress={x => dispatch(addToCart(x))}>
    //         <Text style={styles.addTxt}>Add</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.deleteBtn} activeOpacity={0.6}>
    //         <Text style={styles.deleteTxt}>Delete</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   <TouchableOpacity
    //     style={styles.btn}
    //     activeOpacity={0.6}
    //     onPress={() => navigation.navigate('MyCart')}>
    //     <Text style={styles.deleteTxt}>GoTOMyCart</Text>
    //   </TouchableOpacity>
    // </View>
    <View>
      <View>
        {Object.values(Items).map(item => (
          <View key={item.id} style={styles.container}>
            <View>
              <Text style={{color: 'red'}}>{item.name}</Text>
              <Text style={{color: 'red'}}>{item.description}</Text>
              <TouchableOpacity
                onPress={() => handleAddToCart}
                style={styles.addBtn}>
                <Text style={styles.addTxt}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={() => handleAddToCart}
                style={styles.deleteBtn}>
                <Text style={styles.deleteTxt}>Delete from Cart</Text>
              </TouchableOpacity>
            </View>
            <Image source={item.image} style={{width: 100, height: 100}} />
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('MyCart')}>
        <Text style={styles.deleteTxt}>GoTOMyCart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCart;

const styles = StyleSheet.create({
  deleteTxt: {
    padding: 4,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  addTxt: {
    padding: 4,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  deleteBtn: {
    backgroundColor: 'tomato',
    borderRadius: 4,
    marginTop: 4,
    marginLeft: 6,
  },
  addBtn: {
    backgroundColor: 'green',
    borderRadius: 4,
    marginTop: 4,
  },
  cont: {flexDirection: 'row', marginTop: 20},
  mainCont: {
    margin: 10,
    borderColor: '#000',
    borderWidth: 0.6,
    borderRadius: 8,
    padding: 10,
  },
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: '#000',
  },
});
