import { View, Text, TouchableOpacity, Alert } from 'react-native';
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
  onPress: () => void,
  memos: any,
  item: any,
}


export const MemoListItem = (props: ListStyle) => {
  const { title, bgColor, darkness, textColor, deleteButton, fontWeight, onPress, memos, item } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw(`flex-row justify-between items-center border-b border-gray-200 bg-${bgColor}-${darkness}`)}>
      <View style={tw('p-4 ')}>
        <Text numberOfLines={1} style={tw(`text-base font-${fontWeight} mb-1 text-${textColor}`)}>{item.bodyText}</Text>
        <Text style={tw(`text-xs text-${textColor}`)}>{String(item.updateDate)}</Text>
      </View>

      <TouchableOpacity
        onPress={() => Alert.alert('delete')} style={tw(`${deleteButton} pr-4 py-4`)}>
        <Feather name="x" size={16} color="#444" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};


