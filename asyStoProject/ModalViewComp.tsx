import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

const ModalViewComp = () => {
  const [showModal, setshowModal] = useState<boolean>(false);
  const {height, width} = Dimensions.get('window');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      {!showModal && (
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
            borderRadius: 20,
            alignSelf: 'center',
            overflow: 'visible',
          }}
          onPress={() => {
            setshowModal(!showModal);
          }}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
            ShowModal
          </Text>
        </TouchableOpacity>
      )}
      {showModal && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            height: height,
            width: width,
            backgroundColor: '#00000020',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#fff',
              borderRadius: 22,
              height: 300,
              width: '90%',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'grey',
                position: 'absolute',
                top: 12,
                right: 12,
                borderRadius: 50,
                height: 30,
                width: 30,
                margin: 10,
              }}
              onPress={() => setshowModal(false)}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                x
              </Text>
            </TouchableOpacity>
            <View style={{padding: 12}}>
              <Text
                style={{
                  color: '#405060',
                  margin: 12,
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                This is first text
              </Text>
              <Text
                style={{
                  color: '#405060',
                  margin: 12,
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                This is first text
              </Text>
              <Text
                style={{
                  color: '#405060',
                  margin: 12,
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                This is first text
              </Text>
              <Text
                style={{
                  color: '#405060',
                  margin: 12,
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                This is first text
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ModalViewComp;

const styles = StyleSheet.create({});

{
  /* <View style={{flex: 1, backgroundColor: 'red'}}> */
}
{
  /* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            height: 60,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              marginRight: 5,
              borderRadius: 10,
              flex: 0.2,
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}> */
}
{
  /* <Image
                  source={require('../../assets/images/auth/ind.png')}
                  style={{
                    aspectRatio: 1,
                    height: '80%',
                  }}
                /> */
}
{
  /* </View>
          <View style={{position: 'relative', flex: 0.8, height: '100%'}}>
            <TextInput
              placeholder="Phone number"
              placeholderTextColor={'grey'}
              maxLength={10}
              keyboardType="phone-pad"
              autoCapitalize="none"
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                color: '#000',
                paddingHorizontal: 10,
                height: 60,
                fontSize: 16,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: '#00000070',
                position: 'absolute',
                top: 5,
                left: 10,
                fontSize: 12,
              }}></Text>
          </View> */
}
{
  /* </View> */
}
// </View>
// <TouchableOpacity
//   style={{
//     backgroundColor: '#00b86c',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: '#000',
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   }}>
//   <Text
//     style={{
//       color: '#fff',
//       fontSize: 20,
//       alignSelf: 'center',
//       fontWeight: '800',
//     }}>
//     Continue
//   </Text>
// </TouchableOpacity>
// <Text
//   style={{
//     color: '#00000050',
//     alignSelf: 'center',
//     marginVertical: 15,
//     fontSize: 18,
//   }}>
//   OR
// </Text>
