import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';

type CustomCategoryProps = {
  itemImage: any;
  itemTitle: string;
};

const CustomCategory = ({itemImage, itemTitle}: CustomCategoryProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Image source={itemImage} style={styles.image}></Image>
      <Text style={styles.textStyle}>{itemTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomCategory;
