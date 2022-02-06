import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import React from 'react';

import tw from 'tailwind-rn'
import { TaskAddButton } from '../components/atoms/TaskAddButton';
import { KeyboardSafeView } from '../components/KeyboardSafeView';

export const MemoCreateScreen = (props: { navigation: any }) => {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={tw('flex-auto h-full')}>
      <TaskAddButton onPress={() => { navigation.goBack('MemoListScreens') }} iconName='check' />

      <View style={tw('px-7 py-8 flex-1')}>
        <TextInput style={tw('text-base leading-6  flex-1')} multiline value="" />
      </View>
    </KeyboardSafeView>
  );
};
