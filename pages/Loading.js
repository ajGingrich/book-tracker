import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Loading = ({ navigation }) => {
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      navigation.navigate(user ? 'Main' : 'SignUp');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Loading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Loading;
