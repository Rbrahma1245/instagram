import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import Stories from './Components/Stories';
import Header from './Components/Header';
import Card from './Components/Card';
import img4 from './images/img4.jpg';
import blur from './images/blur.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

let list = [
  {
    id: 1,
    name: 'Rahul Brahma',
    userName: '_rbrahma_',
    post: {
      postId: 11,
      likes: 511,
      desc: 'jhgUYfuyfgjgkdfjmgfkjfkjvjvjh',
      comments: 101,
      date: '24 June',
      img: img4
    },
  },
  {
    id: 2,
    name: 'Biplob Kaliota',
    userName: 'biplob12@_',
    post: {
      postId: 21,
      likes: 218,
      desc: 'nnbcvcbacaajkjaskdjuadkha',
      comments: 312,
      date: '12 June',
      img: blur
    },
  },
  {
    id: 3,
    name: 'Dipankar Deka',
    userName: '@dipankar_12',
    post: {
      postId: 31,
      likes: 607,
      desc: 'nznzmnmznzbxgahkhaaa',
      comments: 812,
      date: '15 May',
      img: img1
    },
  },
  {
    id: 4,
    name: 'Arun Kumar',
    userName: 'arun_kumar',
    post: {
      postId: 41,
      likes: 588,
      desc: 'lloiiyuyyrtrereretyjycvc',
      comments: 612,
      date: '7 june',
      img: img2
    },
  },

  {
    id: 5,
    name: 'Manik Zaat',
    userName: 'manik_zaat',
    post: {
      postId: 51,
      likes: 87,
      desc: 'jjjaxaxbhjgkjhhjvvaxax',
      comments: 312,
      date: '27 May',
      img: img3
    },
  },
];

function App(): JSX.Element {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Header />
      <Stories />
      <Card list={list}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default App;
