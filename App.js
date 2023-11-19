import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {MyActivityIndicator} from './app/components/MyActivityIndicator';
// import {MyButton} from './app/components/MyButton';
// import {MyFlatList} from './app/components/MyFlatList';
// import {MyImage} from './app/components/MyImage';
// import {MyImageBackground} from './app/components/MyImageBackground';
// import {MyKeyboardAvoidingView} from './app/components/MyKeyboardAvoidingView';
// import {MyModal} from './app/components/MyModal';
// import {MyPressable} from './app/components/MyPressable';
// import {MyView} from './app/components/MyView';
// import {MyTextInput} from './app/components/MyTextInput';
import {MyText} from './app/components/MyText';

export const App = () => {
  return (
    <View style={styles.container}>
      {/* <MyActivityIndicator /> */}
      {/* <MyButton /> */}
      {/* <MyFlatList /> */}
      {/* <MyImage /> */}
      {/* <MyImageBackground /> */}
      {/* <MyKeyboardAvoidingView /> */}
      {/* <MyModal /> */}
      {/* <MyPressable /> */}
      {/* <MyView /> */}
      {/* <MyTextInput /> */}
      <MyText />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
