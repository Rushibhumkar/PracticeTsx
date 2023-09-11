import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
interface Props {}
const CartIcon: React.FC<Props> = () => {
  const navigation = useNavigation();
  const [viewCart, setViewCart] = useState(false);
  return (
    <View style={{position: 'absolute', bottom: 15, width: '100%', zIndex: 50}}>
      <TouchableOpacity
        style={{
          backgroundColor: themeColors.bgColor(1),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15,
          borderRadius: 50,
          padding: 12,
          paddingVertical: 9,
        }}
        onPress={() => navigation.navigate('Delivery')}
        // onPress={() => setViewCart(true)}
      >
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,0.3)',
            padding: 12,
            borderRadius: 50,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: '#fff'}}>
            {20}
          </Text>
        </View>

        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 14,
            color: '#fff',
          }}>
          View Cart
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 14, color: '#fff'}}>
          ${20}
        </Text>
      </TouchableOpacity>

      <View>
        {viewCart && (
          <View
            style={{
              // backgroundColor: 'red',
              backgroundColor: 'pink',
              height: 300,
              width: '100%',
              position: 'relative',
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
              bottom: 10,
            }}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={viewCart}
              presentationStyle="formSheet"
              style={{
                backgroundColor: 'red',
                height: 300,
                width: '100%',
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              }}>
              <View
                style={{
                  height: 5,
                  width: 50,
                  backgroundColor: 'grey',
                  alignSelf: 'center',
                  borderRadius: 4,
                  marginTop: 20,
                }}></View>
              <Text style={{color: '#000'}}>This is text</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  padding: 8,
                  alignSelf: 'center',
                }}
                onPress={() => setViewCart(false)}>
                <Text style={{color: '#000'}}>Close</Text>
              </TouchableOpacity>
            </Modal>
          </View>
        )}
      </View>
      <View></View>
    </View>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  sheetContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

// <Modal
//   isVisible={isVisible}
//   onBackdropPress={onClose}
//   backdropOpacity={0.5}
//   style={styles.modal}
// >

// </Modal>
