import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import tw from "tailwind-rn"
import { Feather } from '@expo/vector-icons';
import { dateToString } from '../../utils';
import firebase from 'firebase'



// type ListStyle = {
//   title: string,
//   bgColor: string,
//   darkness: number,
//   textColor: string,
//   deleteButton: string,
//   fontWeight: string,
//   memos: any,
//   onPress: {

//   }
//   item: {
//     id: string,
//     bodyText: string,
//     updateDate: number,
//   },
// }


export const MemoListItem = (props) => {
  const { bgColor, darkness, textColor, fontWeight, onPress, item } = props;


  const deleteMemo = (id) => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      console.log(ref)
      Alert.alert('メモを削除します', 'よろしいですか?', [
        {
          text: 'キャンセル',
          onPress: () => { },
        },
        {
          text: '削除する',
          style: "destructive",
          onPress: () => {
            ref.delete().catch(() => {
              Alert.alert('削除に失敗しました');
            })
          },
        }
      ])
    }
  }


  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw(`flex-row justify-between items-center border-b border-gray-200 bg-${bgColor}-${darkness}`)}>
      <View style={tw('p-4 flex-1 ')}>
        <Text numberOfLines={1} style={tw(`text-base font-${fontWeight} mb-1 text-${textColor}`)}>{item.bodyText}</Text>
        <Text style={tw(`text-xs text-${textColor}`)}>{dateToString(item.updateDate)}</Text>
      </View>


      <TouchableOpacity
        onPress={() => { deleteMemo(item.id) }}
        style={tw(`pr-4 py-4`)}>
        <Feather name="x" size={16} color="#444" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};


