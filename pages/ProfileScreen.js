import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const { navigate } = navigation || {};

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default ProfileScreen;
