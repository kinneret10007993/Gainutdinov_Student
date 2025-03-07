import React from 'react';
import { Button, View, Text } from 'react-native';

export default function ThirdPage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Назад на 2 страницу"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}