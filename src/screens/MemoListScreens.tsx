import { View, Text } from 'react-native';
import React from 'react';

import { MemoList } from '../components/MemoList';
import { TaskAddButton } from '../components/atoms/TaskAddButton';
import tw from 'tailwind-rn'



export const MemoListScreens = (props: { navigation: any; }) => {
  const { navigation } = props;
  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton onPress={() => {navigation.navigate('MemoCreate');}} iconName='plus' />
      <View>

        <MemoList />
      </View>
    </View>
  );
};



