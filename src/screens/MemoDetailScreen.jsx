import { View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import { DetailScreenTextArea } from '../components/DetailScreenTextArea';
import tw from 'tailwind-rn'
import { TaskAddButton } from '../components/atoms/TaskAddButton';
import firebase from 'firebase';
import { dateToString } from '../utils';

// interface Props {
//   navigation: {
//     navigate: any,
//   }
//   route: {
//     params: {
//       id: string
//     }
//   }
// }

// interface Auth {
//   currentUser: {
//     uid: string,
//   }
// }

// interface Data {
//   bodyText: any | null;
//   updateDate: any | null;
//   doc: {
//     id: any | null;
//   },
// }




export const MemoDetailScreen = (props) => {
  const { navigation, route } = props;
  const { id } = route.params;
  console.log(id);
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => { };
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        // console.log(doc.id, doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updateDate: data.updateDate.toDate(),
        });
      });
    } return unsubscribe;
  }, []);

  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton
        onPress={() => {
          navigation.navigate(
            'MemoEdit',
            { id: memo.id, bodyText: memo.bodyText },
          )
        }}
        iconName='edit-2' />
      <View
        style={tw(`flex-row justify-between items-center border-b border-gray-200 bg-blue-500`)}>
        <View style={tw('p-4')}>
          <Text style={tw(`text-xl font-semibold mb-1 text-white`)}>{memo && memo.bodyText}</Text>
          <Text style={tw(`text-xs text-white`)}>{memo && dateToString(memo.updateDate)}</Text>
        </View>
      </View>
      <DetailScreenTextArea memo={memo} />
    </View>
  );
};


MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({
      id: string
    }),
  }).isRequired,
};
