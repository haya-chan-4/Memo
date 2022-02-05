import { View, Text } from 'react-native';
import React from 'react';
import { AppBar } from '../components/AppBar';
import { MemoList } from '../components/MemoList';
import { TaskAddButton } from '../components/atoms/TaskAddButton';
import tw from 'tailwind-rn'



export const MemoListScreens = () => {
  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton iconName='plus' />
      <View>
        <AppBar />
        <MemoList />
      </View>
    </View>
  );
};



