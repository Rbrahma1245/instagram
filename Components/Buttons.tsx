import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

import {UserContext} from '../App';

const Buttons = ({list}: any) => {
  const userList = useContext(UserContext);

  const [like, setLike] = useState(false);

  const handleClick = (id: any) => {
    console.log('click');
    userList.filter((e: any, i: number) => {
      if (e.id == id) {
        return e.post.likes + 1;
      }
    });
  };

  useEffect(()=>{
    UserContext

  },[UserContext])

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => handleClick(list.id)}>
        <Image
          style={{width: 28, height: 28, marginLeft: 15}}
          source={require('../images/heart.png')}
        />
      </TouchableOpacity>

      <Image style={styles.image} source={require('../images/comment.png')} />

      <Image style={styles.image} source={require('../images/share.png')} />
      <Image
        style={{width: 28, height: 35, marginLeft: 240}}
        source={require('../images/save.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 3,
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 15,
    alignItems: 'center',
  },
});

export default Buttons;
