import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect, } from 'react';
import firebase from 'firebase'

import tw from 'tailwind-rn'
import { SubmitButton } from '../components/atoms/SubmitButton';
import { InputForm } from '../components/atoms/InputForm';

export const LoginScreen = (props: { navigation: any }) => {
  const { navigation } = props;
  const [email, setEmail] = useState('Email Address');
  const [password, setPassword] = useState('Password');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      }
    });
    return unsubscribe;
  }, []);
// useEffectの第二引数は自動レンダリングを防ぐため

  useEffect(() => {
      console.log('mount');
      return () => {
        console.log('unmount');
      }
  }, [])

  const handlePress = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
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
        <Text style={tw('text-xl font-bold leading-8 mb-6')}>Log In</Text>
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
          <Text style={tw('text-sm  self-start leading-6')}>Not registered?</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
            <Text style={tw('ml-2 text-sm  self-start leading-6 text-blue-500')}>Sign Up Here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


