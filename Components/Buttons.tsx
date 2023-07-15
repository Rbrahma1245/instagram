import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Buttons = () => {
  return (
    <View style={styles.buttonContainer}>
      <Image
        style={{width: 40, height: 60}}
        source={require('../images/heart.jpg')}
      />

      <Image style={styles.image} source={require('../images/comment.png')} />

      <Image style={styles.image} source={require('../images/share.png')} />
      <Image
        style={{width: 30, height: 40, marginLeft: 230}}
        source={require('../images/save.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'center',
  },
  image: {
    width: 28,
    height: 28,
    marginLeft: 15,
    alignItems: 'center',
  },
});

export default Buttons;