import { TouchableOpacity } from 'react-native';
import React from 'react';
import tw from "tailwind-rn"
import { Feather } from '@expo/vector-icons';

type ButtonIcon = {
  iconName: 'plus'| 'edit-2'| 'check'| 'x',
  onPress: () => void
}



export const TaskAddButton = (props: ButtonIcon) => {
  let { iconName, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={tw('bg-blue-500 rounded-full w-16 h-16 justify-center items-center absolute  right-8 bottom-16 z-10  ') }>
      <Feather name={iconName} size={24} color="white" />
    </TouchableOpacity>
  );
};


