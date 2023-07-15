import React from 'react';
import {
  ScrollView,
  StyleSheet,

} from 'react-native';
import Stories from './Components/Stories';
import Header from './Components/Header';
import Card from './Components/Card';

function App(): JSX.Element {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Header />
      <Stories />
      <Card />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default App;
