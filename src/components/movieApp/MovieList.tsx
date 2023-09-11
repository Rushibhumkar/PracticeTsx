import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {fallbackMoviePoster, image185} from './api/MovieDb';
const {height, width} = Dimensions.get('window');
interface Movie {
  title: any;
}
interface Props {
  title: string;
  data: Movie[];
}
const MovieList: React.FC<Props> = ({title, data, hideSeeAll}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginVertical: 4,
        padding: 10,
      }}>
      <View
        style={{
          marginHorizontal: 4,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.text}>See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 0}}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              key={index}
              onPress={() => navigation.push('MovieScreen', item)}>
              <View style={{margin: 4}}>
                <Image
                  // source={require('../../assets/images/download.jpeg')}
                  source={{
                    uri: image185(item.poster_path) || fallbackMoviePoster,
                  }}
                  borderRadius={16}
                  style={{
                    resizeMode: 'contain',
                    width: width * 0.33,
                    height: height * 0.22,
                  }}
                />
                <Text style={{color: '#fff', marginHorizontal: 2}}>
                  {item.title.length > 14
                    ? item.title.slice(0, 14) + '...'
                    : item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  text: {
    color: '#b57e05',
    fontSize: 18,
  },
});
