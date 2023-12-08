import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: any;
  keyboardType: string;
  maxLength: number;
  disabled: boolean;
};
const CommonTextInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  maxLength,
  disabled,
}: InputProps) => {
  return (
    <View
      style={{
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#9e9e9e',
        marginTop: 10,
      }}>
      <TextInput
        placeholder={placeholder}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        keyboardType={keyboardType}
        value={value}
        maxLength={maxLength}
        placeholderTextColor={'grey'}
        style={{paddingHorizontal: 12, color: '#000'}}
      />
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({});
