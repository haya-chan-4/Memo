import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from "tailwind-rn"
import { Feather } from '@expo/vector-icons';

type ListStyle = {
  title: string,
  bgColor: string,
  darkness: number,
  textColor: string,
  deleteButton: string,
  fontWeight: string,
}


export const MemoListItem = (props: ListStyle) => {
  const { title, bgColor, darkness, textColor, deleteButton, fontWeight } = props;

  return (
    <View style={tw(`flex-row justify-between items-center border-b border-gray-200 bg-${bgColor}-${darkness}`)}>
      <View style={tw('p-4 ')}>
        <Text style={tw(`text-base font-${fontWeight} mb-1 text-${textColor}`)}>{title}</Text>
        <Text style={tw(`text-xs text-${textColor}`)}>2022-2-2 10:10</Text>
      </View>

      <TouchableOpacity style={tw(`${deleteButton} mr-4`)}>
        <Feather name="x" size={16} color="#444" />
      </TouchableOpacity>
    </View>
  );
};


