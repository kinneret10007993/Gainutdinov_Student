import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const handleReadMore = () => {
    Alert.alert();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Биология</Text>
      </View>

      <View style={styles.contentContainer}>
      <Text style={styles.headline}>Отдел растений</Text>
        <Image
          source={{ uri: 'https://i.pinimg.com/originals/27/ef/0e/27ef0e8df8b3aaf6569de3b50c498459.jpg' }}
          style={styles.image}
        />
          <Text style={styles.headline}>Папоротниковидные</Text>
        <View style={styles.textContainer}>
          <Text style={styles.content}>
          Папоротникови́дные, или па́поротники (лат. Polypodióphyta), — отдел сосудистых растений, в который входят как современные папоротники, так и одни из древнейших высших растений, появившихся около 405 млн лет назад в девонском периоде палеозойской эры. Гигантские растения из группы древовидных папоротников во многом определяли облик планеты в конце палеозойской — начале мезозойской эры..
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
    backgroundColor: 'green',
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
    color: 'white',
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
    backgroundColor: 'green',
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