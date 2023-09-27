import React from 'react';
import {Image, Text, View} from 'react-native';
import CustomIconButton from '../CustomIconButton/CustomIconButton';
import {styles} from './style';

type CustomSpecialOfferProps = {
  itemImage: any;
  itemName: string;
  itemPrice: number;
  onPress?: () => void;
};

const CustomSpecialOffer = ({
  itemImage,
  itemName,
  itemPrice,
  onPress,
}: CustomSpecialOfferProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixedHeightContainer}>
        <Image source={itemImage} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{itemName}</Text>
          <Text style={styles.textStyle1}>Rs {itemPrice}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <CustomIconButton
              iconName="plus"
              text="Tambah"
              disabled={false}
              onPress={onPress}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomSpecialOffer;
