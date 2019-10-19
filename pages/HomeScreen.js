import React from 'react';
import {
  Button,
  StyleSheet,
  View,
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
  const navigationOptions = { title: 'Welcome' };
  const { navigate } = navigation || {};

  return (
    <View>
      <Button
        title="Go to your profile"
        onPress={() => navigate('Profile', {
          name: 'Jane',
          style: styles,
        })}
      />
    </View>
  );
}

export default HomeScreen;
