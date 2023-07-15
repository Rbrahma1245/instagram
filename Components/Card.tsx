import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Buttons from './Buttons';

const Card = ({list}: any) => {
  console.log(list);

  return (
    <View>
      {list.map((currElem: any, i: number) => {
        return (
          <View key={`${currElem.id}_${i}`}>
            <Text style={{padding: 15, fontWeight: 'bold', color: '#3E3D3D'}}>
              {currElem.userName}
            </Text>
            <Image
              style={{alignSelf: 'center', height: 400}}
              resizeMode="contain"
              source={currElem.post.img}
            />
            <Buttons />
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
});

export default Card;
