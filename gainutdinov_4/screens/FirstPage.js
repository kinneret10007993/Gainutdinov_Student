import React from 'react';
import { Button, View, Text } from 'react-native';

export default function FirstPage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>1</Text>
      <Button
        title="Далее на 2 страницу"
        onPress={() => navigation.navigate('SecondPage')}
      />
    </View>
  );
}