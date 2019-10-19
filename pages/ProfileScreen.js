import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';

import { titleText, anotherTest } from '../constants/constants';

const styles = StyleSheet.create({
  bigGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'normal',
  },
  view: {
    flex: 2,
    backgroundColor: '#D3D3D3',
  },
  title: {
    color: 'orange',
    fontSize: 18,
  },
  textWrapper: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  button: {
    color: '#fff',
    backgroundColor: '#428BC8',
    height: 40,
    width: 150,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ProfileScreen = ({ navigation }) => {
  const [showImage, setShowImage] = useState(false);
  const [text, setText] = useState('');
  const toggleImage = () => setShowImage(prev => !prev);
  const pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }
  const { name, style } = navigation.state.params || {};

  const renderButton = () => {
    return (
      <TouchableHighlight onPress={() => toggleImage()}>
        <Text style={styles.button}>toggle banana image</Text>
      </TouchableHighlight>
    );
  }

  return (
    <ScrollView contentContainerStyle={style.container} maximumZoomScale={10} >
      <View style={[style.container, styles.textWrapper]}>
        <TextInput
          style={{ height: 40, width: 150, backgroundColor: 'white', marginBottom: 30 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => setText(text)}
          value={text}
        />
        {renderButton()}
        <Button
          title="Home"
          onPress={() => navigation.push('Home')}
        />
      </View>
      <View>
        {showImage && <Image source={pic} style={{width: 193, height: 110}}/>}
        {!showImage && <Text style={[styles.bigGreen, styles.red]}>There is no banana</Text>}
        <Text style={{padding: 10, fontSize: 42}}>
          {text.split(' ').map(word => word && '😎').join(' ')}
        </Text>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;
