import { View, Text } from 'react-native';
import React from 'react';
import { AppBar } from '../components/AppBar';
import { MemoListItem } from '../components/MemoListItem';
import { DetailScreenTextArea } from '../components/DetailScreenTextArea';
import tw from 'tailwind-rn'
import { TaskAddButton } from '../components/atoms/TaskAddButton';

export const MemoDetailScreen = () => {
  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton iconName='edit-2' />
      <AppBar />
      <MemoListItem
        title="Memo"
        bgColor="blue"
        darkness={500}
        textColor="white"
        deleteButton='hidden'
        fontWeight="bold" />
      <DetailScreenTextArea />
    </View>
  );
};


