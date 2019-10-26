import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation || {};

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default HomeScreen;
