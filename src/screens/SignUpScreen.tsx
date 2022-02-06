import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import firebase from 'firebase';

import tw from 'tailwind-rn'
import { SubmitButton } from '../components/atoms/SubmitButton';
import { InputForm } from '../components/atoms/InputForm';

export const SignUpScreen = (props: { navigation: any; }) => {
  const { navigation } = props;
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');

  const handlePress = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredentials: any) => {
        const { user } = userCredentials;
        console.log(user.uid)
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        })
      })
      .catch((error: { code: any; message: any; }) => {
        console.log(error.code, error.message);
        Alert.alert(error.code, error.message)
      })
  }
  return (
    <View>

      <View style={tw('flex-auto h-full bg-blue-50 py-7 px-8 ')}>
        <Text style={tw('text-xl font-bold leading-8 mb-6')}>Sign Up</Text>
        <TextInput
          onChangeText={(text: string) => { setEmail(text); }}
          style={tw(
            'text-base text-gray-400 h-10 p-1 pb-2 px-4 bg-white border-gray-300 border rounded mb-4')}
          placeholder={email}
          autoCapitalize="none"
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <TextInput
          onChangeText={(text: string) => {
            setPassword(text);
          }}
          style={tw(
            'text-base text-gray-400 h-10 p-1 pb-2 px-4 bg-white border-gray-300 border rounded mb-4')}
          placeholder={password}
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton
          onPress={handlePress}
          buttonText="Submit" />
        <View style={tw('flex-row')}>
          <Text style={tw('text-sm  self-start leading-6')}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login');
            }}>
            <Text style={tw('ml-2 text-sm  self-start leading-6 text-blue-500')}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


