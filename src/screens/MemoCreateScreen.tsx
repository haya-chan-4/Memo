import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import firebase from 'firebase';
import tw from 'tailwind-rn'
import { TaskAddButton } from '../components/atoms/TaskAddButton';
import { KeyboardSafeView } from '../components/KeyboardSafeView';

type User = {
  currentUser: any;
}

export const MemoCreateScreen = (props: { navigation: any }) => {
  const [bodyText, setBodyText] = useState('');
  const { navigation } = props;
  const handlePress = () => {
    const { currentUser } = firebase.auth() as User;
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updateDate: new Date(),
    })
      .then((docRef: any) => {  /* 引数にdocRefを受け取れる */
        console.log('checked', docRef.id);
      })
      .catch((error: any) => {
        console.log('error', error);
      });
    navigation.goBack('MemoListScreens')
  }


  return (
    <KeyboardSafeView style={tw('flex-auto h-full')}>
      <TaskAddButton
        onPress={handlePress}
        iconName='check'
      />

      <View style={tw('px-7 py-8 flex-1')}>
        <TextInput
          onChangeText={(text: string) => { setBodyText(text); }}
          style={tw('text-base leading-6  flex-1')}
          multiline
          value={bodyText}
          autoFocus
          />
      </View>
    </KeyboardSafeView>
  );
};
