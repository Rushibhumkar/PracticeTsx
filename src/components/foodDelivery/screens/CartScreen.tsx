import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {featured} from '../data';
import {useNavigation} from '@react-navigation/native';
import {themeColors} from '../theme';
interface Props {}
const CartScreen: React.FC<Props> = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.cont}>
        {/* <-----backButton > */}
        <View style={{position: 'relative', paddingVertical: 12}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              zIndex: 10,
              padding: 3,
              top: 15,
              left: 6,
            }}>
            <Image
              source={require('../../../assets/images/undo.png')}
              style={{
                height: 34,
                width: 34,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'rgb(30,30,50)',
              }}>
              Your cart
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: '800',
                color: 'grey',
              }}>
              {restaurant.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: themeColors.bgColor(0.2),
            flexDirection: 'row',
            paddingHorizontal: 12,
            alignItems: 'center',
            paddingVertical: 16,
          }}>
          {/* <-----deliveryBoyWithBike---> */}
          <Image
            source={require('../../../assets/images/shoeImages/firstShoe.jpg')}
            style={{height: 40, width: 40}}
          />
          <Text
            style={{
              flex: 1,
              paddingLeft: 12,
              color: 'rgba(30,30,50,0.8)',
              fontSize: 13,
            }}>
            Deliver in 20-30 minutes
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                color: themeColors.text,
                fontSize: 13,
              }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
        {/* <----dishesh----> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
          style={{paddingTop: 15}}>
          {restaurant.dishes.map((dish: any, index: number) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 6,
                  paddingHorizontal: 12,
                  backgroundColor: '#fff',
                  marginHorizontal: 6,
                  marginBottom: 9,
                  shadowColor: 'grey',
                  elevation: 10,
                  borderRadius: 25,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: themeColors.text,
                    fontSize: 13,
                  }}>
                  2 x
                </Text>
                <Image
                  source={{
                    uri: 'https://img.freepik.com/free-photo/slice-fresh-piz…pepperoni-white_144627-24389.jpg?size=626&ext=jpg',
                  }}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    borderWidth: 0.6,
                    borderColor: 'grey',
                    resizeMode: 'contain',
                    marginHorizontal: 8,
                  }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontWeight: 'bold',
                    color: 'rgba(30,30,50,0.8)',
                    fontSize: 13,
                  }}>
                  {dish.name}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'rgba(30,30,50,1)',
                    fontSize: 13,
                  }}>
                  ${dish.price}
                </Text>
                <TouchableOpacity style={{padding: 3, marginLeft: 3}}>
                  <Image
                    source={require('../assets/images/minus.png')}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: themeColors.bgColor(1),
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        {/* <-----totals----> */}
        <View
          style={{
            padding: 18,
            paddingHorizontal: 24,
            backgroundColor: themeColors.bgColor(0.2),
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 6,
            }}>
            <Text style={{color: 'grey', fontSize: 13}}>Subtotal</Text>
            <Text style={{color: 'grey', fontSize: 13}}>$20</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 6,
            }}>
            <Text style={{color: 'grey', fontSize: 13}}>Delivery Fee</Text>
            <Text style={{color: 'grey', fontSize: 13}}>$2</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 6,
            }}>
            <Text
              style={{
                color: 'rgb(30,30,50)',
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Order Total
            </Text>
            <Text
              style={{
                color: 'rgb(30,30,50)',
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              $30
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: themeColors.bgColor(1),
                padding: 14,
                borderRadius: 50,
                marginVertical: 6,
              }}
              onPress={() => navigation.navigate('Delivery')}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    elevation: 20,
  },
});
