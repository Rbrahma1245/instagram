import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const StoriesCard = ({e}: any) => {
  return (
    <View key={`${e.id}`}>
      <View style={styles.storiesCard}>
        <TouchableOpacity>
          <Image
            style={{width: 63, height: 63, borderRadius: 50}}
            source={e.profileImg}
          />
        </TouchableOpacity>
      </View>
      <Text style={{marginLeft: 10, marginTop: 5}}>{e.userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  storiesCard: {
    borderWidth: 3,
    borderColor: '#EA709A',
    marginLeft: 15,
    width: 70,
    borderRadius: 100,
  },
});

export default StoriesCard;
