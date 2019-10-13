import React, { useState} from 'react';
import {
  Text,
  View,
  Image,
  Button,
} from 'react-native';

const HelloWorldApp = () => {
  const [showImage, setShowImage] = useState(false);
  const toggleImage = () => setShowImage(prev => !prev);
  const pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  }
  return (
    <View>
      {showImage && <Image source={pic} style={{width: 193, height: 110}}/>}
      {!showImage && <Text>There is no banana</Text>}
      <Button
       title="toggle banana image"
       onPress={() => toggleImage()}
      />
    </View>
  );
}

export default HelloWorldApp;
