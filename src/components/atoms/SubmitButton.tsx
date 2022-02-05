import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn'

type ButtonText = {
  buttonText: string
}


export const SubmitButton = (props:ButtonText) => {
  const {buttonText} = props;
  return (
    <TouchableOpacity style={tw('mb-6 items-center rounded self-start bg-blue-400')}>
      <Text style={tw('text-base py-2 px-6 text-white')}>{buttonText}</Text>
    </TouchableOpacity>
  );
};


