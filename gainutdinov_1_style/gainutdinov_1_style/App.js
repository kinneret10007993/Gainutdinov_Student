import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Журнал Bright</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>Новости</Text>
        <Image source={{ uri: 'https://brightmagazine.ru/wp-content/uploads/2025/01/andrey-metelev-zd1noBBUYi4-unsplash-768x512.jpg' }} style={styles.image} />
        <Text style={styles.headline}>Как перестать страдать? Техника от психолога</Text>
        <Text style={styles.content}>
        Жизнь каждого человека время от времени сопровождается определенными трудностями, которые все воспринимают по-разному. Одни люди борются до конца, другие занимают выжидательную позицию, а третьи опускают руки и сокрушаются по поводу заочного проигрыша. На самом деле привычка страдать является закрепленной схемой мышления, которую важно и нужно менять.
        </Text>
        <Text style={styles.readMore}>Читать далее</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 30,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 30,
  },
  image: {
    width: '80%',
    height: 200,
    marginLeft: 33,
    marginBottom: 20,
    margin: 'auto',
  },
  subtitle: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
    marginLeft: 33,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  headline: {
    marginLeft: 33,
    marginRight: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    margin: 'auto'
  },
  content: {
    fontSize: 16,
    marginLeft: 33,
    marginRight: 20,
    marginBottom: 10,
    lineHeight: 24,
  },
  readMore: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10,
    marginLeft: 33,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
});