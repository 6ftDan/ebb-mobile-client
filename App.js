import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.text}>Hello World!</Text>
          <Image
            style={styles.image}
            source={{uri: 'https://6ftdan.com/wp-content/uploads/2014/05/185854_7448020547_7891.jpg'}}
          />
        </View>

        <View style={styles.container2}>
          <Text style={styles.text}>Hello Again!</Text>
          <Image
            style={styles.image}
            source={{uri: 'https://6ftdan.com/wp-content/uploads/2014/05/185854_7448020547_7891.jpg'}}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#afc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#073',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 42,
  },
  image: {
    width: 308,
    height: 469,
  },
});
