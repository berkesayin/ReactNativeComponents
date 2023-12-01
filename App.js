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
// import {MyRefreshControl} from './app/components/MyRefreshControl';
// import {MyScrollView} from './app/components/MyScrollView';
// import {MySectionList} from './app/components/MySectionList';
import {MyStatusBar} from './app/components/MyStatusBar';
// import {MySwitch} from './app/components/MySwitch';
// import {MyText} from './app/components/MyText';
// import {MyTextInput} from './app/components/MyTextInput';
// import {MyTouchableOpacity} from './app/components/MyTouchableOpacity';
// import {MyTouchableWithoutFeedback} from './app/components/MyTouchableWithoutFeedback';
// import {MyView} from './app/components/MyView';

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
      {/* <MyRefreshControl /> */}
      {/* <MyScrollView /> */}
      {/* <MySectionList /> */}
      <MyStatusBar />
      {/* <MySwitch /> */}
      {/* <MyText /> */}
      {/* <MyTextInput /> */}
      {/* <MyTouchableOpacity /> */}
      {/* <MyTouchableWithoutFeedback /> */}
      {/* <MyView /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
