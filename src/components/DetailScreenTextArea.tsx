import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn'

interface Props {
  memo: {
    bodyText: string;
  }
}

export const DetailScreenTextArea = (props: Props) => {
  const { memo } = props;
  return (
    <ScrollView style={tw('px-7 py-8')}>
      <Text style={tw('text-base leading-6')}>
        {memo && memo.bodyText}
      </Text>
    </ScrollView>
  );
};


