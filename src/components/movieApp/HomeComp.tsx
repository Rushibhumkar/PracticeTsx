import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState, useEffect} from 'react';
import TrendingMovies from './TrendingMovies';
import MovieList from './MovieList';
import {useNavigation} from '@react-navigation/native';
import Loading from './Loading';
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from './api/MovieDb';
const ios = Platform.OS === 'ios';
const HomeComp = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);
  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);
    setLoading(false);
  };
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data.results) setUpcoming(data.results);
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) setTopRated(data.results);
  };
  return (
    <View
      style={{
        backgroundColor: 'rgb(23,23,23)',
        flex: 1,
      }}>
      <SafeAreaView>
        <StatusBar
          animated={true}
          backgroundColor="rgb(23,23,23)"
          networkActivityIndicatorVisible={true}
          barStyle={'light-content'}
        />
        <View style={styles.header}>
          <TouchableOpacity style={{paddingHorizontal: 4}} activeOpacity={0.6}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/8933/8933889.png',
              }}
              style={styles.drawer}
            />
          </TouchableOpacity>
          <Text style={styles.titleTxt1}>
            M<Text style={styles.titleTxt2}>ovies</Text>
          </Text>
          <TouchableOpacity
            style={{paddingHorizontal: 4}}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('SearchScreen')}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/54/54481.png',
              }}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}>
          {/* <-------------------trendingMovies---------------------> */}
          {trending.length > 0 && <TrendingMovies data={trending} />}
          {/* <-------------------upcomingMovies---------------------> */}
          {upcoming.length > 0 && (
            <MovieList title="Upcoming" hideSeeAll={false} data={upcoming} />
          )}
          {/* <-------------------topRatedMovies---------------------> */}
          {topRated.length > 0 && (
            <MovieList title="Top Rated" hideSeeAll={false} data={topRated} />
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default HomeComp;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
    height: 50,
    backgroundColor: 'rgb(23,23,23)',
    paddingHorizontal: 4,
    marginBottom: 4,
  },
  titleTxt1: {
    color: '#b57e05',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1.1,
  },
  titleTxt2: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1.1,
  },
  searchIcon: {
    height: 24,
    width: 24,
    tintColor: '#fff',
    marginRight: 8,
  },
  drawer: {
    height: 50,
    width: 30,
    tintColor: '#fff',
  },
});
