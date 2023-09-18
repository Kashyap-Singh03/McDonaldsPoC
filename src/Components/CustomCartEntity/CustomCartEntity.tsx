import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../Theme/theme';
import {styles} from './style';

type CustomCartEntityProps = {
  itemImage: any;
  itemName: string;
  itemPrice: number;
};

const CustomCartEntity = ({
  itemImage,
  itemName,
  itemPrice,
}: CustomCartEntityProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={itemImage}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.viewContainer1}>
        <Text style={styles.textHeaderStyle}>{itemName}</Text>
        <View style={styles.viewSubContainer1}>
          <TouchableOpacity style={styles.counterStyle}>
            <Icon name="minus" size={20} color={theme.colors.secondary} />
          </TouchableOpacity>
          <Text style={styles.textSubContainer1}>3</Text>
          <TouchableOpacity style={styles.counterStyle}>
            <Icon name="plus" size={20} color={theme.colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewContainer2}>
        <TouchableOpacity style={{alignItems: 'flex-end', marginBottom: 20}}>
          <Icon
            name="trash-can-outline"
            size={24}
            color={theme.colors.secondary}
          />
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.textPrice}>Rs {itemPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomCartEntity;
