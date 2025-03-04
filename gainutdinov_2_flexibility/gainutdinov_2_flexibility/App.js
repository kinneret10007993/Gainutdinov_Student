import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.containerWhite}>
        <Text style={styles.text}>Жизнь каждого человека время от времени сопровождается определенными трудностями, которые все воспринимают по-разному. Одни люди борются до конца, другие занимают выжидательную позицию, а третьи опускают руки и сокрушаются по поводу заочного проигрыша. На самом деле привычка страдать является закрепленной схемой мышления, которую важно и нужно менять.</Text>
      </View>
      <View style={styles.containerLightGray}>
        <Text style={styles.text}>Если вы твердо намерены сломать излюбленную модель поведения, предполагающую страдания в результате любой неудачи, для начала нужно определиться с причинами. Подумайте, какие мотивы лежат в основе избранной схемы. Вероятно, вам не хватает внимания и поддержки со стороны окружающих или же так проще и легче воспринимать происходящее. Если понять движущие факторы, то получится отказаться от возникшего паттерна.</Text>
      </View>
      <View style={styles.containerGray}>
        <Text style={styles.text}>Почему нам так удобно страдать? Потому что для этого не надо ничего делать, кроме того, как активно себя жалеть и по возможности жаловаться на свои неудачи окружающим людям. Чтобы прекратить вести себя столь непродуктивно, начните действовать вопреки привычному рефлексу. В данном случае полезно вспомнить народную мудрость о том, что лучше сделать и пожалеть, чем не сделать и пожалеть. Действуйте назло внутреннему желанию страдать и перечислять свои неприятности. Делайте хоть что-то, чтобы выйти из создавшегося положения. Поверьте, если вы хорошенько задумайтесь, то поймете, что можно сделать. Разумеется, что в перечень разрешенных пунктов не должно входить злоупотребление алкоголем и опасными веществами, что только усугубит ситуацию.</Text>
      </View>
      <View style={styles.containerBlack}>
        <Text style={styles.textBlack}>Читать далее</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  containerWhite: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  containerLightGray: {
    backgroundColor: 'lightgray',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  containerGray: {
    backgroundColor: 'gray',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  containerBlack: {
    backgroundColor: 'black',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#000000',
  },
  textBlack: {
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default App;