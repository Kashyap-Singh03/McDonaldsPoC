import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {baseLocalEng} from './../../Localization/BaseLocalization';
import theme from './../../Theme/theme';
import {styles} from './style';
const IntroPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.secondary}
      />
      <View style={styles.logoStyle}>
        <Image
          source={require('../../Assets/mcdlogo.png')}
          style={styles.imgLogoStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.manStyle}>
        <Image
          source={require('../../Assets/mcdman.png')}
          style={styles.imgManStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeaderStyle}>
          {baseLocalEng.IntroPage.mainText}
        </Text>
        <Text style={styles.textBodyStyle}>
          {baseLocalEng.IntroPage.subText}
        </Text>
      </View>
      <View style={styles.btn}>
        <CustomButton
          text={baseLocalEng.IntroPage.btnText}
          disabled={false}
          backgroundColor={theme.colors.primary}
          textColor={theme.colors.secondary}
        />
      </View>
    </View>
  );
};

export default IntroPage;
