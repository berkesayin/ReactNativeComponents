import React from 'react';
import {View, Text} from 'react-native';

export const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      <Text style={{fontSize: 24, color: '#333'}}>Hello World!</Text>
    </View>
  );
};
