import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Cast from './Cast';
import MovieList from './MovieList';
import Loading from './Loading';
import {
  fallbackMoviePoster,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  image500,
} from './api/MovieDb';
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'marginTop:3';
const MovieScreen = () => {
  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isFavourite, toggleFavourite] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getMovieDetials(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);

  const getMovieDetials = async (id: number) => {
    const data = await fetchMovieDetails(id);
    setLoading(false);
    if (data) {
      setMovie({...movie, ...data});
    }
  };
  const getMovieCredits = async (id: number) => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) {
      setCast(data.cast);
    }
  };
  const getSimilarMovies = async (id: number) => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setSimilarMovies(data.results);
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: 'rgb(23,23,23)'}}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <View style={{width: '100%'}}>
        <SafeAreaView style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/images/backward.png')}
              style={{
                tintColor: '#b57e05',
                height: 28,
                width: 28,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <Image
              source={require('../../assets/images/fullHeart.png')}
              style={{
                tintColor: isFavourite ? '#b57e05' : '#fff',
                height: 28,
                width: 28,
              }}
            />
          </TouchableOpacity>
        </SafeAreaView>
        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              // source={require('../../assets/images/moviePoster.jpeg')}
              source={{
                uri: image500(movie?.poster_path) || fallbackMoviePoster,
              }}
              style={{height: height * 0.55, width}}
            />
            <LinearGradient
              colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
              style={{
                width,
                height: height * 0.4,
                position: 'absolute',
                bottom: 0,
              }}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
            />
          </View>
        )}
      </View>
      <View style={{marginTop: -(height * 0.09)}}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            letterSpacing: 1.2,
            marginHorizontal: 8,
          }}>
          {movie?.title}
        </Text>
        {movie?.id ? (
          <Text style={{color: 'grey', fontSize: 12, textAlign: 'center'}}>
            {movie?.status} • {movie?.release_date.split('-')[0] || 'N/A'} •{' '}
            {movie?.runtime} min
          </Text>
        ) : null}

        {/* <---------MovieTypes(action,thriller,comedy)------> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: 4,
          }}>
          {movie?.genres?.map((genre, index) => {
            let showDot = index + 1 != movie.genres.length;
            return (
              <Text
                style={{color: 'grey', fontSize: 12, textAlign: 'center'}}
                key={index}>
                {genre?.name} {showDot ? '•' : null}
              </Text>
            );
          })}
        </View>
        {/* <---------description--------> */}
        <Text
          style={{
            color: 'grey',
            fontSize: 12,
            marginHorizontal: 16,
            marginTop: 6,
          }}>
          {movie?.overview}
        </Text>
      </View>
      {/* <------Cast---------> */}
      {movie?.id && cast.length > 0 && (
        <Cast navigation={navigation} cast={cast} />
      )}

      {/* <--------Similar Movies-------> */}
      {movie?.id && similarMovies.length > 0 && (
        <MovieList
          title="Similar Movies"
          hideSeeAll={true}
          data={similarMovies}
        />
      )}
    </ScrollView>
  );
};

export default MovieScreen;
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
});
