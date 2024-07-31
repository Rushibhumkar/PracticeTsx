import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface CommonFileProps {
  title: string;
  imageUrl: string;
  onSelect: () => void;
  isSelected: boolean;
}

const CommonFile: React.FC<CommonFileProps> = ({
  title,
  imageUrl,
  onSelect,
  isSelected,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 200,
        width: '45%',
        backgroundColor: 'grey',
        borderRadius: 8,
        borderWidth: isSelected ? 2 : 0,
        borderColor: isSelected ? '#000' : '#fff',
      }}
      onPress={onSelect}>
      <Text style={{color: '#fff', textAlign: 'center', marginTop: 8}}>
        {title}
      </Text>
      <Image
        source={{uri: imageUrl}}
        style={{
          height: 50,
          width: 50,
          alignSelf: 'center',
          marginTop: 12,
        }}
      />
      {isSelected && (
        <Text
          style={{
            backgroundColor: 'green',
            borderRadius: 8,
            padding: 8,
            textAlign: 'center',
            alignSelf: 'center',
            marginTop: 12,
            color: '#fff',
          }}>
          Selected
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CommonFile;
