import { View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

import { MemoList } from '../components/MemoList';
import { TaskAddButton } from '../components/atoms/TaskAddButton';
import tw from 'tailwind-rn'
import { LogOutButton } from '../components/atoms/LogOutButton';
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

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />
    })
  }, []);

// データベースからデータを取得するための処理
  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
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
      }, (error) => {
        console.log(error.message);
        Alert.alert('Error');
      });
    }

    return unsubscribe;
  }, []);
// データベースからデータを取得するための処理


  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton onPress={() => { navigation.navigate('MemoCreate'); }} iconName='plus' />
      <View>

        <MemoList memos={memos} />
      </View>
    </View>
  );
};



