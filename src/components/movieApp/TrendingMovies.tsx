import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {image500} from './api/MovieDb';
const {width, height} = Dimensions.get('window');
const TrendingMovies = ({data}: any) => {
  const navigation = useNavigation();
  const handleClick = ({item}: any) => {
    navigation.navigate('MovieScreen', item);
  };
  return (
    <View>
      <Text
        style={{
          color: '#fff',
          fontSize: 18,
          marginLeft: 16,
          marginVertical: 4,
          marginBottom: 20,
        }}>
        Trending
      </Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};

export default TrendingMovies;
const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableOpacity onPress={() => handleClick(item)} activeOpacity={0.6}>
      <Image
        // source={require('../../assets/images/download.jpeg')}
        source={{uri: image500(item.poster_path)}}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 16,
        }}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({});
