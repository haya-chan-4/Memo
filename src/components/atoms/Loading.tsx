import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn';

interface Props {
  isLoading: boolean;
}

export const Loading = (props: Props) => {
  const { isLoading } = props
  if (!isLoading) {
    return null;
  } else {
    return (
      <View style={tw('justify-center items-center w-full h-full inset-0 z-10 absolute')}>
        <View style={tw('mb-16')}>
          <ActivityIndicator size="large" color="#000" />
        </View>

      </View>
    );
  };
};

