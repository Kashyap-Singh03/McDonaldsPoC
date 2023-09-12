import {View, Text} from 'react-native';
import React from 'react';
import CustomIconButton from './src/Components/CustomIconButton/CustomIconButton';
import {StyleSheet} from 'react-native';
import CustomButton from './src/Components/CustomButton/CustomButton';
import IntroPage from './src/Screens/IntroPage/IntroPage';
import CustomCartEntity from './src/Components/CustomCartEntity/CustomCartEntity';
const App = () => {
  return (
    <View style={style.container}>
      {/* <CustomIconButton
        text="sdfsf"
        iconName="plus"
        disabled={false}></CustomIconButton>
        <View style={{margin:10}}></View>
      <CustomButton text="Submit" disabled={false}></CustomButton> */}
      {/* <IntroPage></IntroPage> */}
      <CustomCartEntity itemImage={require('./src/Assets/itemDetails.png')} itemName='Big Mac Beef Rasher' itemPrice={108}></CustomCartEntity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
