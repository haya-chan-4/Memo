import React from 'react';
import { View, } from 'react-native';
import { TaskAddButton } from './src/components/atoms/TaskAddButton';
import { MemoDetailScreen } from './src/screens/MemoDetailScreen';
import { MemoListScreens } from './src/screens/MemoListScreens';
import tw from 'tailwind-rn'
import { MemoEditScreen } from './src/screens/MemoEditScreen';
import { MemoCreateScreen } from './src/screens/MemoCreateScreen';
import { KeyboardSafeView } from './src/components/KeyboardSafeView';
import { LoginScreen } from './src/screens/LoginScreen';
import { SignUpScreen } from './src/screens/SignupScreen';


export default function App() {
  return (
    <KeyboardSafeView style={tw('relative h-full')}>
      {/* <MemoListScreens /> */}
      {/* <MemoDetailScreen /> */}
      <MemoEditScreen />
      {/* <MemoCreateScreen /> */}
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
    </KeyboardSafeView>
  );
}
