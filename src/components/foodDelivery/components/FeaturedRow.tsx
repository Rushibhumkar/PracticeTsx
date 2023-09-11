import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {themeColors} from '../theme';
import RestaurantCard from './RestaurantCard';
interface Props {
  title: string | any;
  description: string | any;
  restaurants: string | any;
  index: any;
}
const FeaturedRow: React.FC<Props> = ({
  index,
  title,
  description,
  restaurants,
}) => {
  return (
    <View key={index}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          // marginVertical: 4,
        }}>
        <View>
          <Text
            style={{color: 'rgb(28,28,28)', fontSize: 14, fontWeight: 'bold'}}>
            {title}
          </Text>
          <Text style={{color: 'grey', fontSize: 12}}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{color: themeColors.text, fontSize: 14, fontWeight: 'bold'}}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        style={{overflow: 'visible', paddingVertical: 10}}>
        {restaurants.map((restaurant: any, index: number) => {
          return <RestaurantCard item={restaurant} key={index} index={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
