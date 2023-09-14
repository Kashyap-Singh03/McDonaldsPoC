import {View, Text} from 'react-native';
import React from 'react';
import CustomIconButton from './src/Components/CustomIconButton/CustomIconButton';
import {StyleSheet} from 'react-native';
import CustomButton from './src/Components/CustomButton/CustomButton';
import IntroPage from './src/Screens/IntroPage/IntroPage';
import CustomCartEntity from './src/Components/CustomCartEntity/CustomCartEntity';
import CustomSpecialOffer from './src/Components/CustomSpecialOffer/CustomSpecialOffer';
import SignUpPage from './src/Screens/SignUpPage/SignUpPage';
import SignInPage from './src/Screens/SignInPage/SignInPage';
import store, {persistor} from './src/Redux/Store';

import CustomBanner from './src/Components/CustomBanner/CustomBanner';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/Navigation/RootStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
    // <View style={style.container}>
    //   {/* <CustomIconButton
    //     text="sdfsf"
    //     iconName="plus"
    //     disabled={false}></CustomIconButton>
    //     <View style={{margin:10}}></View>
    //   <CustomButton text="Submit" disabled={false}></CustomButton> */}
    //   {/* <IntroPage></IntroPage> */}
    //   {/* <CustomCartEntity itemImage={require('./src/Assets/itemDetails.png')} itemName='Big Mac Beef Rasher' itemPrice={108}></CustomCartEntity> */}
    //   {/* <CustomSpecialOffer itemImage={require('./src/Assets/breakfast.png')} itemName='Big Mac Beef Rasher' itemPrice={45}></CustomSpecialOffer> */}
    //   {/* <CustomSpecialOffer itemImage={require('./src/Assets/ChickenNuggets.png')} itemName='Shared box with thousand island Sauce' itemPrice={100}></CustomSpecialOffer> */}
    //   {/* <SignUpPage></SignUpPage> */}
    //   {/* <SignInPage></SignInPage> */}
    //   <HomePage></HomePage>
    //   {/* <CustomBanner></CustomBanner> */}
    // </View>
  );
};

export default App;
