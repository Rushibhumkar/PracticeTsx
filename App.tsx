import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './src/components/foodDelivery/redux/store';
import ChattingStack from './chattingapp/ChattingStack';
import ReactHooksStack from './hooksScreens/ReactHooksStack';
import RootNavigator from './SocialApp/navigations/RootNavigator';
import SelectionMain from './SelectionFlatlist/SelectionMain';
import OtpVerification from './SelectionFlatlist/OtpVerification';
const App = () => {
  return (
    // <Provider store={store}>
    //   <GestureHandlerRootView style={{flex: 1}}>
    //     {/* <BottomSheet /> */}
    //     {/* Other app content */}
    //     <MainNavigation />
    //   </GestureHandlerRootView>
    // </Provider>
    <>
      {/* <ChattingStack /> */}
      {/* <RootNavigator /> */}
      {/* <SelectionMain /> */}
      <OtpVerification />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
