import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import colors from '../config/colors';

import Icon from 'react-native-vector-icons/FontAwesome';
const AppTextInput = ({
  placeholder = 'placeholder',
  onChangeText,
  icon,
  numberOfLines,
  multiline,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      {icon && <Icon name="rocket" size={30} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        numberOfLines={numberOfLines}
        multiline={multiline}
        {...otherProps}
      />
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
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
