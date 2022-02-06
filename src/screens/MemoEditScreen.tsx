import { View, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import React from 'react';

import tw from 'tailwind-rn'
import { TaskAddButton } from '../components/atoms/TaskAddButton';


export const MemoEditScreen = (props: { navigation: any; }) => {
  const { navigation } = props;
  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton onPress={() => {navigation.goBack('MemoEdit')}} iconName='check' />

      <View style={tw('px-7  py-8 flex-1')}>
        <TextInput style={tw('text-base leading-6  ')} multiline value='買い物リスト' />
      </View>
    </View>
  );
};
