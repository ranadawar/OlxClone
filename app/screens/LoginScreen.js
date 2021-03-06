import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import AppStatusBar from '../components/AppStatusBar';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppStatusBar />
      <View style={styles.topContainer}>
        <Image style={styles.logo} source={require('../assets/react.png')} />
        <Text style={styles.text}>Login</Text>
      </View>
      <KeyboardAvoidingView style={{width: '90%', marginVertical: 15}}>
        <AppTextInput
          placeholder="Email"
          onChangeText={email => setEmail(email)}
        />
        <AppTextInput
          placeholder="Password"
          onChangeText={password => setPassword(password)}
          secureTextEntry
        />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView style={styles.btnContainer}>
        <AppButton title="Login" />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
    backgroundColor: 'white',
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
