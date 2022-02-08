import { View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

import { MemoList } from '../components/MemoList';
import { TaskAddButton } from '../components/atoms/TaskAddButton';
import tw from 'tailwind-rn'
import { LogOutButton } from '../components/atoms/LogOutButton';
import { Loading } from '../components/atoms/Loading'
import firebase from 'firebase';

// type User = {
//   currentUser: any,
// }

// type UserMemo = {
//   userMemos: {
//     id: string,
//     bodyText: string,
//     updateDate: string,
//   }
// }



export const MemoListScreens = (props) => {
  const { navigation } = props;
  // firebaseから取得したデータを格納するためのもの
  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />
    })
  }, []);

  // データベースからデータを取得するための処理
  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => { };
    if (currentUser) {
      setIsLoading(true);
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updateDate', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => { /* snapshotの中には memoのlistに関する情報が格納されている*/
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updateDate: data.updateDate.toDate(),
          });
        });
        setMemos(userMemos);
        setIsLoading(false);
      }, (error) => {
        console.log(error.message);
        setIsLoading(false);
        Alert.alert('Error');
      });
    }

    return unsubscribe;
  }, []);
  // データベースからデータを取得するための処理


  if (memos.length === 0) {
    return (
      <View style={tw('flex-auto h-full justify-center items-center ')}>
      <Loading isLoading={isLoading} />
        <Text style={tw('text-xl')}>メモを追加してください</Text>
        <TaskAddButton
          onPress={() => { navigation.navigate('MemoCreate'); }} iconName='plus'
        />
      </View>

    )
  }

  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton onPress={() => { navigation.navigate('MemoCreate'); }} iconName='plus' />
      <View>
        <MemoList memos={memos} />
      </View>
    </View>
  );
};



