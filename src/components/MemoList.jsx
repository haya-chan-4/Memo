import { View, Text } from 'react-native';
import React from 'react';
import { MemoListItem } from './atoms/MemoListItem';
import { useNavigation } from '@react-navigation/native'


export const MemoList = () => {
  // const { navigation } = props;
  const navigation = useNavigation();

  return (
    <View>
      <MemoListItem
        onPress={() => { navigation.navigate('MemoDetail'); } }
        title="Memo"
        bgColor="gray"
        darkness={50}
        textColor="black"
        fontWeight='normal'  />
    </View>
  );
};


