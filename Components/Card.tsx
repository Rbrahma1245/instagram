import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Buttons from './Buttons';
import {List} from '../App';
import axios from 'axios';

const Card = ({list}: any) => {
  const url = 'https://fakestoreapi.com/products/';

  return (
    <View>
      {list.map((currElem: List, i: number) => {
        return (
          <View key={`${currElem.id}_${i}`}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image style={styles.image} source={currElem.profileImg} />
              <Text
                style={{
                  padding: 15,
                  paddingLeft: 10,
                  fontWeight: 'bold',
                  color: '#3E3D3D',
                }}>
                {currElem.userName}
              </Text>
            </View>
            <Image
              style={{alignSelf: 'center', height: 400}}
              resizeMode="contain"
              source={currElem.post.img}
            />
            <Buttons list={currElem} />
            <Text style={styles.textBold}>{currElem.post.likes} likes</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.textBold}>{currElem.userName}</Text>
              <Text style={styles.bodyText}>{currElem.post.desc}</Text>
            </View>
            <Text style={styles.bodyText}>
              View all {currElem.post.comments} comments
            </Text>
            <Text style={styles.bodyText}>{currElem.post.date}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  textBold: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#3E3D3D',
  },
  bodyText: {
    marginLeft: 10,
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#EA709A',
    marginLeft: 7,
  },
});

export default Card;
