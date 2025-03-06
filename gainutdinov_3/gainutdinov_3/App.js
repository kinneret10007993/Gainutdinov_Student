import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const handleReadMore = () => {
    Alert.alert();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Журнал Bright</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>Новости</Text>
        <Image
          source={{ uri: 'https://brightmagazine.ru/wp-content/uploads/2025/01/andrey-metelev-zd1noBBUYi4-unsplash-768x512.jpg' }}
          style={styles.image}
        />
          <Text style={styles.headline}>Как перестать страдать? Техника от психолога</Text>
        <View style={styles.textContainer}>
          <Text style={styles.content}>
          Жизнь каждого человека время от времени сопровождается определенными трудностями, которые все воспринимают по-разному. Одни люди борются до конца, другие занимают выжидательную позицию, а третьи опускают руки и сокрушаются по поводу заочного проигрыша. На самом деле привычка страдать является закрепленной схемой мышления, которую важно и нужно менять.
          </Text>
        </View>
        <TouchableOpacity onPress={handleReadMore} style={styles.readMoreContainer}>
          <Text style={styles.readMoreText}>Читать далее</Text>
        </TouchableOpacity>
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
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: 'center',
  },
  subtitle: {
    backgroundColor: 'gray',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'black',
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  textContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  readMoreContainer: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'black',
  },
  readMoreText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});