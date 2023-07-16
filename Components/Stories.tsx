import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {List} from '../App';
import dp from '../images/dp.jpg';
import StoriesCard from './StoriesCard';

const Stories = ({list}: any) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{height: 115, marginTop: 5}}>
      <View style={{flexDirection: 'row', height: 70, marginTop: 10}}>
        <TouchableOpacity>
          <Image style={styles.storiesCardContainer} source={dp} />
        </TouchableOpacity>
        {list.map((e: List, i: number) => (
          <StoriesCard e={e} i={i}/>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  storiesCardContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
  },
});

export default Stories;
