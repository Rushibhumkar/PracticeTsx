import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Loading from './Loading';
import {debounce} from 'lodash';
import {fallbackMoviePoster, image185, searchMovies} from './api/MovieDb';
const {height, width} = Dimensions.get('window');
const SearchScreen = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = (search: any) => {
    if (search && search.length > 2) {
      setLoading(true);
      searchMovies({
        query: search,
        include_adults: 'false',
        language: 'en-US',
        page: '1',
      }).then(data => {
        setLoading(false);
        if (data && data.results) {
          setResults(data.results);
        }
      });
    } else {
      setLoading(false);
      setResults([]);
    }
  };
  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView style={{backgroundColor: 'rgb(23,23,23)', flex: 1}}>
      <View style={styles.cont}>
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search Movies"
          placeholderTextColor={'grey'}
          style={styles.textIp}
        />
        <TouchableOpacity onPress={() => navigation.navigate('HomeComp')}>
          <View style={styles.crossBtn}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              X
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingBottom: 80,
            paddingTop: 4,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 4,
              marginVertical: 4,
            }}>
            Results ({results.length})
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              marginVertical: 6,
            }}>
            {results.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  key={index}
                  style={{marginVertical: 4}}
                  onPress={() => navigation.navigate('MovieScreen', item)}>
                  <Image
                    // source={require('../../assets/images/moviePoster.jpeg')}
                    source={{
                      uri: image185(item?.poster_path) || fallbackMoviePoster,
                    }}
                    style={{
                      width: width * 0.44,
                      height: height * 0.3,
                      borderRadius: 16,
                    }}
                  />
                  <Text
                    style={{
                      color: 'rgb(150,150,150)',
                      fontSize: 12,
                      paddingLeft: 4,
                    }}>
                    {item.title.length > 22
                      ? item.title.slice(0, 22) + '...'
                      : item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          {/* <Image
                source={require('../../assets/images/backimg.jpeg')}
                style={{height: 200, width: 200, backgroundColor: '#000'}}
              /> */}
          <Text style={{color: 'rgb(120,120,120)', fontSize: 14}}>
            No searchable data here...
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  cont: {
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderColor: 'grey',
    borderWidth: 0.6,
    flexDirection: 'row',
    borderRadius: 25,
    overflow: 'hidden',
  },
  textIp: {
    paddingBottom: 4,
    paddingLeft: 20,
    fontSize: 14,
    color: '#fff',
  },
  crossBtn: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 12,
    height: 50,
    width: 50,
    overflow: 'hidden',
  },
});
