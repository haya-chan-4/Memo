import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppBar } from '../components/AppBar';
import tw from 'tailwind-rn'
import { SubmitButton } from '../components/atoms/SubmitButton';
import { InputForm } from '../components/atoms/InputForm';

export const SignUpScreen = () => {
  return (
    <View>
      <AppBar />
      <View style={tw('flex-auto h-full bg-blue-50 py-7 px-8 ')}>
        <Text style={tw('text-xl font-bold leading-8 mb-6')}>Sign Up</Text>
        <InputForm textValue="Email" />
        <InputForm textValue="Password" />
        <SubmitButton buttonText="Submit" />
        <View style={tw('flex-row')}>
          <Text style={tw('text-sm  self-start leading-6')}>Already registered?</Text>
          <TouchableOpacity>
            <Text style={tw('ml-2 text-sm  self-start leading-6 text-blue-500')}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


