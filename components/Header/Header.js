import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 75,
    backgroundColor: 'orange',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>BookTracker</Text>
    </View>
  );
};

export default Header;
