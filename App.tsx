import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import CustomIconButton from './src/Components/CustomIconButton/CustomIconButton';
import {StyleSheet} from 'react-native';
import CustomButton from './src/Components/CustomButton/CustomButton';
import IntroPage from './src/Screens/IntroPage/IntroPage';
import CustomCartEntity from './src/Components/CustomCartEntity/CustomCartEntity';
import CustomSpecialOffer from './src/Components/CustomSpecialOffer/CustomSpecialOffer';
import SignUpPage from './src/Screens/SignUpPage/SignUpPage';
import SignInPage from './src/Screens/SignInPage/SignInPage';
import Dummy from './src/Screens/Dummy';
import store from './src/Redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <View style={style.container}>
        {/* <CustomIconButton
        text="sdfsf"
        iconName="plus"
        disabled={false}></CustomIconButton>
        <View style={{margin:10}}></View>
      <CustomButton text="Submit" disabled={false}></CustomButton> */}
        {/* <IntroPage></IntroPage> */}
        {/* <CustomCartEntity itemImage={require('./src/Assets/itemDetails.png')} itemName='Big Mac Beef Rasher' itemPrice={108}></CustomCartEntity> */}
        {/* <CustomSpecialOffer itemImage={require('./src/Assets/breakfast.png')} itemName='Big Mac Beef Rasher' itemPrice={45}></CustomSpecialOffer> */}
        {/* <CustomSpecialOffer itemImage={require('./src/Assets/ChickenNuggets.png')} itemName='Shared box with thousand island Sauce' itemPrice={100}></CustomSpecialOffer> */}
        {/* <SignUpPage></SignUpPage> */}
        {/* <SignInPage></SignInPage> */}
        <Dummy></Dummy>
      </View>
    </Provider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection:'row',
    backgroundColor: 'white',
  },
});

export default App;
