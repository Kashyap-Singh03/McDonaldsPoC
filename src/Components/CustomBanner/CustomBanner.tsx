import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './style';
const CustomBanner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/Banner.png')}
        style={styles.bannerImage}
        resizeMode="contain"
      />
    </View>
  );
};

export default CustomBanner;
