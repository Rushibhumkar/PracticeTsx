import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {categories} from '../data';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View style={{marginTop: 4}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{overflow: 'visible'}}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categories.map((category: any, index: number) => {
          let isActive = category.id === activeCategory;
          let btnBgColor: string = isActive
            ? 'rgba(30,50,60,0.6)'
            : 'rgba(28,28,28,0.3)';
          let textColor: string = isActive ? 'rgb(30,30,60)' : 'grey';
          return (
            <View
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 6,
              }}>
              <TouchableOpacity
                style={{
                  padding: 4,
                  marginVertical: 4,
                  backgroundColor: btnBgColor,
                  borderWidth: 0.6,
                  overflow: 'hidden',
                  borderColor: 'grey',
                  borderRadius: 50,
                }}
                onPress={() => setActiveCategory(category.id)}
                activeOpacity={0.6}>
                <Image
                  source={{uri: category.image}}
                  style={{
                    height: 45,
                    width: 45,
                    resizeMode: 'stretch',
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: textColor,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
