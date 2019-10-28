import React from 'react';
import PropTypes from 'prop-types';
import firebase from '@react-native-firebase/app';
import {
  View,
  Text,
} from 'react-native';

const ConnectScreen = () => {
  return (
    <View>
      <Text>{firebase.app().name}</Text>
    </View>
  );
};

ConnectScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ConnectScreen;
