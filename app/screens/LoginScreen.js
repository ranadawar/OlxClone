import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React from 'react';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="yellow" />
      <Image style={styles.logo} source={require('../assets/react.png')} />
      <View style={{width: '90%', marginVertical: 15}}>
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Password" />
      </View>
      <View style={styles.btnContainer}>
        <AppButton title="Login" />
        <AppButton title="Sign Up" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  btnContainer: {
    width: '90%',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
    resizeMode: 'contain',
  },
});
