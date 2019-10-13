import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { titleText, anotherTest } from './constants/constants';
import HelloWorldApp from './HelloWorldApp';

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorldApp style={styles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
