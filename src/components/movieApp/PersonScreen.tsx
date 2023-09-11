import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {stiles} from '../../theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import MovieList from './MovieList';
import Loading from './Loading';
import {
  fallbackPersonImage,
  fetchPersonDetails,
  fetchPersonMovies,
  image342,
} from './api/MovieDb';
const {height, width} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const verticalMargin = ios ? '' : 'marginHorizontal:3';
const PersonScreen = () => {
  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([]);
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getPersonDetails(item.id);
    getPersonMovies(item.id);
  }, [item]);

  const getPersonDetails = async id => {
    const data = await fetchPersonDetails(id);
    if (data) {
      setPerson(data);
    }
    setLoading(false);
  };
  const getPersonMovies = async id => {
    const data = await fetchPersonMovies(id);
    if (data && data.cast) {
      setPersonMovies(data.cast);
    }
  };
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'rgb(23,23,23)'}}
      contentContainerStyle={{paddingBottom: 20, paddingTop: 60}}>
      <SafeAreaView style={styles.headerIcons}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={stiles.background}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={{tintColor: '#fff', height: 28, width: 28}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
          <Image
            source={require('../../assets/images/fullHeart.png')}
            style={{
              tintColor: isFavourite ? 'red' : '#fff',
              height: 28,
              width: 28,
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/* <---PersonDetails---> */}
      {loading ? (
        <Loading />
      ) : (
        <View style={{marginTop: 20}}>
          <View style={styles.outerView}>
            <View style={styles.innerView}>
              <Image
                // source={require('../../assets/images/moviePoster.jpeg')}
                source={{
                  uri: image342(person?.profile_path) || fallbackPersonImage,
                }}
                style={{
                  height: height * 0.43,
                  width: width * 0.74,
                }}
              />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
              }}>
              {person?.name}
            </Text>
            <Text
              style={{
                color: 'grey',
                fontWeight: 'bold',
                fontSize: 12,
                textAlign: 'center',
              }}>
              {person?.place_of_birth}
            </Text>
          </View>
          <View style={styles.dataOuterCont}>
            <View style={styles.dataCont}>
              <Text style={{color: '#fff', fontSize: 14}}>Gender</Text>
              <Text style={{color: 'rgb(150,150,150)', fontSize: 12}}>
                {person?.gender == 1 ? 'Female' : 'Male'}
              </Text>
            </View>
            <View style={styles.dataCont}>
              <Text style={{color: '#fff', fontSize: 14}}>Birthday</Text>
              <Text style={{color: 'rgb(150,150,150)', fontSize: 12}}>
                {person?.birthday}
              </Text>
            </View>
            <View style={styles.dataCont}>
              <Text style={{color: '#fff', fontSize: 14}}>Know for</Text>
              <Text style={{color: 'rgb(150,150,150)', fontSize: 12}}>
                {person?.known_for_department}
              </Text>
            </View>
            <View style={styles.dataCont}>
              <Text style={{color: '#fff', fontSize: 14}}>Popularity</Text>
              <Text style={{color: 'rgb(150,150,150)', fontSize: 12}}>
                {person?.Popularity.toFixed(2)}%
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 12, marginHorizontal: 12}}>
            <Text style={{color: '#fff', fontSize: 18, marginBottom: 4}}>
              Biography
            </Text>
            <Text style={{color: 'rgb(150,150,150)', fontSize: 12}}>
              {person?.biography || 'N/A'}
            </Text>
          </View>
          {/* <----------Movies--------> */}
          {person?.id && personMovies.length > 0 && (
            <MovieList title="Movies" hideSeeAll={true} data={personMovies} />
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({
  headerIcons: {
    position: 'absolute',
    top: 40,
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  outerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  innerView: {
    alignItems: 'center',
    overflow: 'hidden',
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 0.4,
    borderColor: '#fff',
  },
  dataOuterCont: {
    marginHorizontal: 12,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(80,80,80)',
    borderRadius: 20,
  },
  dataCont: {
    borderRadius: 10,
    borderColor: 'grey',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
