import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const CreateAd = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create Ad</Text>
      </View>
      <KeyboardAvoidingView behavior="position" style={styles.bottomContainer}>
        <AppTextInput
          placeholder="Add Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />

        <AppTextInput
          placeholder="Add Description"
          value={desc}
          onChangeText={text => setDesc(text)}
          numberOfLines={3}
          multiline={true}
        />

        <AppTextInput
          placeholder="Year of Purchase"
          value={year}
          keyboardType="numeric"
          onChangeText={text => setYear(text)}
        />

        <AppTextInput
          placeholder="Enter Price in PKR"
          value={price}
          keyboardType="numeric"
          onChangeText={text => setPrice(text)}
        />

        <AppTextInput
          placeholder="Your Contact Number"
          value={phone}
          keyboardType="numeric"
          onChangeText={text => setPhone(text)}
        />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView behavior="position" style={styles.bottomContainer}>
        <AppButton title="Upload Image" color="cyan" />
        <AppButton title="Post Add" color="tomato" />
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateAd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
