import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Main'))
      .catch(error => setErrorMessage(error));
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      {errorMessage &&
        <Text style={{ color: 'red' }}>
          {errorMessage}
        </Text>
      }
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={emailAddress => setEmail(emailAddress)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={pass => setPassword(pass)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
