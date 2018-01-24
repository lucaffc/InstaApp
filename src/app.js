/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

import Post from './components/Post.js';

const width = Dimensions.get('screen').width;

 class App extends Component<{}> {
  render() {
    const fotos= [{id: 1, usuario: 'lucas'},
    {id: 2, usuario: 'anne'},
    {id: 3, usuario: 'mauricio'}];

    return (
      <FlatList style={styles.container}
        keyExtractor={item => item.id}
        data={fotos}
        renderItem={({item}) =>
        <Post foto={item}/>
          }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }


});
