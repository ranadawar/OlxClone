import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {COLORS, FONTS} from '../../../../rnProjects/NFT_Seller/app/constants';
import AppStatusBar from '../components/AppStatusBar';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppStatusBar />
      <View style={styles.topContainer}>
        <Image style={styles.logo} source={require('../assets/react.png')} />
        <Text style={styles.text}>Register</Text>
      </View>
      <View style={{width: '90%', marginVertical: 15}}>
        <AppTextInput
          placeholder="Email"
          onChangeText={email => setEmail(email)}
        />
        <AppTextInput
          placeholder="Password"
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={styles.btnContainer}>
        <AppButton title="Register" />
        <AppButton
          title="Log In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;

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
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontFamily: 'InterSemiBold',
  },
});
