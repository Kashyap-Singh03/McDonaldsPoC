import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';

type CustomCategoryProps = {
  itemImage: any;
  itemTitle: string;
  onPress?: () => void;
};

const CustomCategory = ({itemImage, itemTitle,onPress}: CustomCategoryProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={itemImage} style={styles.image}></Image>
      <Text style={styles.textStyle}>{itemTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomCategory;
