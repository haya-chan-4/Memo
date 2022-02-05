import { View, Text } from 'react-native';
import React from 'react';
import { MemoListItem } from './MemoListItem';


export const MemoList = () => {
  return (
    <View>

      <MemoListItem
        title="Memo"
        bgColor="gray"
        darkness={50}
        textColor="black"
        deleteButton='contents'
        fontWeight='normal' />
      <MemoListItem title="やることリスト" bgColor="gray"
        darkness={50}
        textColor="black"
        deleteButton='contents' fontWeight='normal' />
      <MemoListItem title="旅行" bgColor="gray"
        darkness={50}
        textColor="black"
        deleteButton='contents' fontWeight='normal' />
      <MemoListItem title="instagram Idea" bgColor="gray"
        darkness={50}
        textColor="black"
        deleteButton='contents' fontWeight='normal' />
      <MemoListItem title="入学式" bgColor="gray"
        darkness={50}
        textColor="black"
        deleteButton='contents' fontWeight='normal' />
    </View>
  );
};


