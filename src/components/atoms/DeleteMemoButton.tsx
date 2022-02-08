import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import tw from 'tailwind-rn'
import firebase from 'firebase';

export const DeleteMemoButton = (props: any) => {
  const { deleteButton, item } = props;
  const { id } = item;
  return (
    <TouchableOpacity
      onPress={() => { deleteMemo(item.id) }}
      style={tw(`pr-4 py-4`)}>
      <Feather name="x" size={16} color="#444" />
    </TouchableOpacity>
  );
};



function deleteMemo(id: any) {
  throw new Error('Function not implemented.');
}

