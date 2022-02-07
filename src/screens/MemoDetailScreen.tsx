import { View, Text } from 'react-native';
import React, { memo } from 'react';

import { MemoListItem } from '../components/atoms/MemoListItem';
import { DetailScreenTextArea } from '../components/DetailScreenTextArea';
import tw from 'tailwind-rn'
import { TaskAddButton } from '../components/atoms/TaskAddButton';


type Props = {
  navigation: any;
  memos: any;
  item: any;
}

export const MemoDetailScreen = (props: Props) => {
  const { navigation, memos, item } = props;
  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton
        onPress={() => {
          navigation.navigate('MemoEdit')
        }}
        iconName='edit-2' />

      {/* <MemoListItem
        title="Memo"
        bgColor="blue"
        darkness={500}
        textColor="white"
        deleteButton='hidden'
        fontWeight="bold"
        onPress={() => { } }/> */}
        <View

    style={tw(`flex-row justify-between items-center border-b border-gray-200 bg-blue-500`)}>
      <View style={tw('p-4 ')}>
        <Text style={tw(`text-xl font-semibold mb-1 text-white`)}>買い物</Text>
        <Text style={tw(`text-xs text-white`)}>2020-2-2-</Text>
      </View>


    </View>
      <DetailScreenTextArea />
    </View>
  );
};


