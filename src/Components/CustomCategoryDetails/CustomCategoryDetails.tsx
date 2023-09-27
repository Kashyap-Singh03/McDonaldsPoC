import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../Theme/theme';
import {baseLocalEng} from './../../Localization/BaseLocalization';
import {styles} from './style';

type CustomCategoryDetailsProps = {
  itemImage: any;
  itemName: string;
  itemPrice: number;
  itemDescription: string;
  onPressAdd?: () => void;
  onPress?: () => void;
};

const CustomCategoryDetails = ({
  itemImage,
  itemName,
  itemPrice,
  itemDescription,
  onPress,
  onPressAdd,
}: CustomCategoryDetailsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={itemImage} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.viewContainer1}>
        <Text style={styles.textHeaderStyle}>{itemName}</Text>
        <Text style={styles.textSubContainer1}>Rs {itemPrice}</Text>
        <View style={styles.viewSubContainer1}>
          <Text
            style={styles.textSubContainer1}
            numberOfLines={2}
            ellipsizeMode="tail">
            {itemDescription}
          </Text>
        </View>
      </View>
      <View style={styles.viewContainer2}>
        <TouchableOpacity
          onPress={onPressAdd}
          style={{alignItems: 'flex-end', marginBottom: 20}}>
          <Text
            style={{
              color: theme.colors.secondary,
              fontSize: theme.fonts.h8.fontSize,
            }}>
            {baseLocalEng.Components.add} (+)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{alignItems: 'flex-end', marginBottom: 20}}>
          <Icon
            name="arrow-right"
            size={24}
            color={theme.colors.primary}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomCategoryDetails;
