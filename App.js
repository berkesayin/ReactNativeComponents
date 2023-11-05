import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const App = () => {
  const [textInfo, setTextInfo] = useState('React Native Quickstart');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textInfo}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});
