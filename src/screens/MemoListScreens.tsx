import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

import { MemoList } from '../components/MemoList';
import { TaskAddButton } from '../components/atoms/TaskAddButton';
import tw from 'tailwind-rn'
import { LogOutButton } from '../components/atoms/LogOutButton';



export const MemoListScreens = (props: { navigation: any; }) => {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />
    })
  }, [])

  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton onPress={() => { navigation.navigate('MemoCreate'); }} iconName='plus' />
      <View>

        <MemoList />
      </View>
    </View>
  );
};



