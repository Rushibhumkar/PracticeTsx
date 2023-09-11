import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {fallbackPersonImage, image185} from './api/MovieDb';

const Cast = ({cast, navigation}) => {
  return (
    <View>
      <Text
        style={{
          color: '#fff',
          marginLeft: 16,
          marginVertical: 16,
          fontWeight: 'bold',
        }}>
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  margin: 4,
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate('PersonScreen', person)}>
                <View style={styles.imgCont}>
                  <Image
                    // source={require('../../assets/images/moviePoster.jpeg')}
                    source={{
                      uri:
                        image185(person?.profile_path) || fallbackPersonImage,
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 12,
                  }}>
                  {person?.character.length > 10
                    ? person.character.slice(0, 10) + '...'
                    : person?.character}
                </Text>

                <Text
                  style={{color: 'grey', alignItems: 'center', fontSize: 12}}>
                  {person?.original_name.length > 10
                    ? person.original_name.slice(0, 10) + '...'
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};
export default Cast;
const styles = StyleSheet.create({
  imgCont: {
    overflow: 'hidden',
    width: 80,
    height: 80,
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 40,
  },
});
