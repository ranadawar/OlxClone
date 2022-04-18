import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const AppButton = ({title = 'Button', onPress, color = 'tomato'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 10,
  },
});
