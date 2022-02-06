import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native'

export const LogOutButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch(() => { Alert.alert('ログアウトエラー') })
  }


  return (
    <TouchableOpacity onPress={handlePress} style={tw('py-3 px-1')}>
      <Text style={tw('text-white text-sm ')}>ログアウト</Text>
    </TouchableOpacity>
  );
};





