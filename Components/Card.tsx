import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Buttons from './Buttons';

const Card = () => {
  return (
    <View>
      <Image
        style={{ alignSelf: 'center',  height:400}}
        resizeMode="contain"
        source={require('../images/iphone14.jpg')}
      />
      <Buttons />

      <Image
        style={{alignSelf: 'center', height: 400}}
        resizeMode="contain"
        source={require('../images/blur.jpg')}
      />
      <Buttons />

      <Image
        style={{alignSelf: 'center', height: 400}}
        resizeMode="contain"
        source={require('../images/img1.jpg')}
      />
      <Buttons />

      <Image
        style={{alignSelf: 'center', height: 400}}
        resizeMode="contain"
        source={require('../images/img2.jpg')}
      />
      <Buttons />

      <Image
        style={{alignSelf: 'center', height: 400}}
        resizeMode="contain"
        source={require('../images/img3.jpg')}
      />
      <Buttons />



    </View>
  );
};

const styles = StyleSheet.create({});

export default Card;
