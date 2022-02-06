import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';


import { MemoDetailScreen } from './src/screens/MemoDetailScreen';
import { MemoListScreens } from './src/screens/MemoListScreens';
import tw from 'tailwind-rn'
import { MemoEditScreen } from './src/screens/MemoEditScreen';
import { MemoCreateScreen } from './src/screens/MemoCreateScreen';
import { KeyboardSafeView } from './src/components/KeyboardSafeView';
import { LoginScreen } from './src/screens/LoginScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <KeyboardSafeView style={tw('relative h-full')}>
        <Stack.Navigator initialRouteName='Login'
          screenOptions={{
            headerStyle: { backgroundColor: '#3a82f6', },
            headerTitleStyle: { color: '#fff' },
            headerTitle: 'Memo App',
            headerTintColor: '#fff',
            headerBackTitle: 'Back',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        >
          <Stack.Screen name="MemoList" component={MemoListScreens} />
          <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
          <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
          <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
            }}
          />
          <Stack.Screen
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
            }}
            name="SignUp"
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </KeyboardSafeView>
    </NavigationContainer>

  );
}
