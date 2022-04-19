import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import StackNavigator from './app/navigation/StackNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
