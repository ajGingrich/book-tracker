import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const ListScreen = ({ navigation }) => {
  const { navigate } = navigation || {};

  return (
    <View>
      <Text>lists</Text>
    </View>
  );
};

export default ListScreen;
