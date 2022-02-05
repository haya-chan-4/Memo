import { View, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import React from 'react';
import { AppBar } from '../components/AppBar';
import tw from 'tailwind-rn'
import { TaskAddButton } from '../components/atoms/TaskAddButton';
import {KeyboardSafeView} from '../components/KeyboardSafeView';

export const MemoEditScreen = () => {
  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton onPress={() => {Alert.alert('alert')}} iconName='check' />
      <AppBar />
      <View style={tw('px-7  py-8 flex-1')}>
        <TextInput style={tw('text-base leading-6  ')} multiline value='買い物リスト' />
      </View>
    </View>
  );
};
