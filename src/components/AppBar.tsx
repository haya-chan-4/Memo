import { View, Text } from 'react-native';
import React from 'react';
import tw from "tailwind-rn"


export const AppBar = () => {
  return (
    <View style={tw('w-full h-28 justify-end items-center bg-blue-500  ')}>
        <View style={tw('items-center ')}>
            <Text style={tw('text-white text-2xl mb-2 leading-8')}>MemoApp</Text>
        </View>

            <Text style={tw('text-gray-200 text-xs absolute right-1 bottom-1 mb-2 mr-2 opacity-80	')}>ログアウト</Text>

      </View>
  );
};


