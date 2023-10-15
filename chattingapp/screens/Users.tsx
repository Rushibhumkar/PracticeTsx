import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import Loader from '../components/Loader';
let id = '';
const Users = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    id = await AsyncStorage.getItem('USERID');
    let tempData = [];
    const email = await AsyncStorage.getItem('EMAIL');
    firestore()
      .collection('users')
      .where('email', '!=', email)
      .get()
      .then((res: any) => {
        if (res.docs.length != null) {
          res.docs.map((item: any) => {
            tempData.push(item.data());
          });
        }
        setUsers(tempData);
        // console.log(JSON.stringify(res.docs[0].data()));
        setLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'purple', fontSize: 18, fontWeight: 'bold'}}>
          RN Firebase Chat App
        </Text>
      </View>
      <FlatList
        data={users}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.userItem}
              onPress={() => {
                navigation.navigate('Chat', {data: item, id: id});
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
                  height: 34,
                  width: 34,
                }}
              />
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  marginLeft: 20,
                  textTransform: 'capitalize',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <Loader visible={loading} />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 10,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userItem: {
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 30,
    height: 60,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 10,
    alignItems: 'center',
  },
});
