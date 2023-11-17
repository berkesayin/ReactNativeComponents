import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const MyView = () => {
  return (
    <View style={styles.view}>
      <View style={styles.boxBlue} />
      <View style={styles.boxRed} />
      <Text>Hello World, Berke!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    height: 100,
    padding: 20,
  },
  boxBlue: {
    backgroundColor: 'blue',
    flex: 0.3,
  },
  boxRed: {
    backgroundColor: 'red',
    flex: 0.5,
  },
});
