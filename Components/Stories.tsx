import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { List } from '../App';

const Stories = ({list}: any) => {
  return (
    <View style={{flexDirection: 'row', height: 70, marginTop: 10}}>
      {list.map((e: List, i: number) => {
        return (
          <View style={styles.storiesCard} key={`${e.id}_${i}`}>
            <TouchableOpacity>
              <Image
                style={{width: 63, height: 63, borderRadius:50}}              
                source={e.profileImg}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  storiesCard: {
    borderWidth: 3,
    borderColor: '#EA709A',
    marginLeft: 10,
    width: 70,
    borderRadius: 100,
  },
});

export default Stories;
