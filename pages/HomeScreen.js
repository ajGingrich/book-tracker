import React from 'react';
import PropTypes from 'prop-types';
import {
  // StyleSheet,
  View,
  Text,
} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
