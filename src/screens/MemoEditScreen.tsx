import { View, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import React, { useState } from 'react';

import tw from 'tailwind-rn'
import { TaskAddButton } from '../components/atoms/TaskAddButton';
import firebase from 'firebase';

interface Props {
  navigation: any,
  route: {
    params: {
      id: string,
      bodyText: string,
    }
  }
}


export const MemoEditScreen = (props: Props) => {
  const { navigation, route } = props;
  const { id, bodyText } = route.params; /* memoDetailScreenから渡ってきたbodyText */
  const [body, setBody] = useState(bodyText);/* 現在編集しているbodyText */

  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          // const errorMsg = translateErrors(error.code);
          Alert.alert(error, error.message);
        });
    }
  }

  return (
    <View style={tw('flex-auto h-full')}>
      <TaskAddButton
        onPress={handlePress}
        iconName='check'
      />

      <View style={tw('px-7  py-8 flex-1')}>
        <TextInput
          style={tw('text-base leading-6  ')}
          multiline
          value={body}
          onChangeText={(text: string) => { setBody(text); }}
        />
      </View>
    </View>
  );
};
