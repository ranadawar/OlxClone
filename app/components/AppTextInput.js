import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import colors from '../config/colors';

const AppTextInput = ({placeholder = 'placeholder'}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.light,
    borderRadius: 12,
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
