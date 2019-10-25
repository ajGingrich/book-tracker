import React, { useState, useEffect } from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import firebase from 'react-native-firebase'

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
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    setState(currentUser);
  }, [])

  return (
    <View style={styles.container}>
      <Text>
        Hi {currentUser && currentUser.email}!
      </Text>
    </View>
  );
}

export default HomeScreen;
