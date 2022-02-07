import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn'
import { MemoListItem } from './atoms/MemoListItem';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';


// type Memos = {
//   memos: ArrayOf(
//     id: string,
//     bodyText: string,
//     updateDate: string,
//   )
// }


export const MemoList = (props) => {
  const { memos } = props;
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <MemoListItem
        onPress={() => { navigation.navigate('MemoDetail'); }}
        title="text"
        bgColor="gray"
        darkness={50}
        textColor="black"
        fontWeight='normal'
        item={item}
        key={item.key}
      />

    )

  }

  return (
    <View>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => { return item.id; }}
      />
    </View>
  );
};


