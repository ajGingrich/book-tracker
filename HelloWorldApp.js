import React, { useState} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

import { titleText, anotherTest } from './constants/constants';

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
    backgroundColor: 'steelblue',
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
    color: 'black',
  },
});

const HelloWorldApp = ({ style }) => {
  const [showImage, setShowImage] = useState(false);
  const toggleImage = () => setShowImage(prev => !prev);
  const pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  }
  return (
    <View>
      <View style={[style.container, styles.textWrapper]}>
        <Text style={styles.title}>{`${titleText} - ${anotherTest}`}</Text>
      </View>
      <View style={[style.container, styles.view]}>
      <View>
      </View>
        {showImage && <Image source={pic} style={{width: 193, height: 110}}/>}
        {!showImage && <Text style={[styles.bigGreen, styles.red]}>There is no banana</Text>}
        <Button
         title="toggle banana image"
         onPress={() => toggleImage()}
         color={'black'}
         style={styles.button}
        />
        <Text numberOfLines={5} style={styles.bigGreen}>Sample styling test</Text>
      </View>

    </View>
  );
}

export default HelloWorldApp;
