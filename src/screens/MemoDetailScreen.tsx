import { View, Text } from 'react-native';
import React from 'react';

import { MemoListItem } from '../components/atoms/MemoListItem';
import { DetailScreenTextArea } from '../components/DetailScreenTextArea';
import tw from 'tailwind-rn'
import { TaskAddButton } from '../components/atoms/TaskAddButton';

export const MemoDetailScreen = (props: { navigation: any; }) => {
  const { navigation } = props;
  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton
        onPress={() => {
          navigation.navigate('MemoEdit')
        }}
        iconName='edit-2' />

      <MemoListItem
        title="Memo"
        bgColor="blue"
        darkness={500}
        textColor="white"
        deleteButton='hidden'
        fontWeight="bold"
        onPress={() => { }}
      />
      <DetailScreenTextArea />
    </View>
  );
};


