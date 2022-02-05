import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn'

export const DetailScreenTextArea = () => {
  return (
    <ScrollView style={tw('px-7 py-8')}>
      <Text style={tw('text-base leading-6')}>
        detail screen text area
        買い物リスト
        書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。なお、組見本の「組」とは文字組のことです。活字印刷時代の用語だったと思います。このダミーテキストは自由に改変することが出来ます。主に書籍やウェブページなどのデザインを作成する時によく使われます。書体やレイアウトなどを確認するために用います。
      </Text>
    </ScrollView>
  );
};


