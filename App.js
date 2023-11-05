import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MyActivityIndicator} from './app/components/MyActivityIndicator';

export const App = () => {
  return (
    <View style={styles.container}>
      <MyActivityIndicator />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
