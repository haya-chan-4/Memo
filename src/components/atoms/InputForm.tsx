import { View, TextInput } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn'

type Text = {
  textValue: string
}

export const InputForm = (props:Text) =>
{
  const {textValue} = props;
  return (
    <TextInput style={tw('text-base text-gray-400 h-10 p-1 pb-2 px-4 bg-white border-gray-300 border rounded mb-4')} value={textValue} />
  );
};
