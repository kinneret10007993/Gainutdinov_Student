import React from 'react';
import { Button, View, Text } from 'react-native';

export default function SecondPage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Далее на 3 страницу"
        onPress={() => navigation.navigate('ThirdPage')}
      />
      <Button
        title="Назад на 1 страницу"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}