import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loader from '../components/Loader';
import Users from './Users';
import Setting from './Setting';
const Main = () => {
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'purple'} barStyle={'default'} />
      {selectedTab === 0 ? <Users /> : <Setting />}

      <View style={styles.bottomTab}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/681/681494.png',
            }}
            height={34}
            width={34}
            tintColor={selectedTab === 0 ? '#fff' : '#a09f9f'}
            onLoad={() => setLoading(false)}
            style={{marginHorizontal: 16}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3019/3019014.png',
            }}
            height={34}
            width={34}
            tintColor={selectedTab === 1 ? '#fff' : '#a09f9f'}
            onLoad={() => setLoading(false)}
            style={{marginHorizontal: 16}}
          />
        </TouchableOpacity>
      </View>
      {loading && <Loader visible={loading} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  bottomTab: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 65,
    backgroundColor: 'purple',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
  },
});

export default Main;
