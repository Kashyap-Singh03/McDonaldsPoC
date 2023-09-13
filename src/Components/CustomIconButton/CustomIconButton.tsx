import React from 'react';
import {DimensionValue, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from './../../Theme/theme';
import {style} from './style';

type CustomIconButtonProps = {
  iconName: string;
  text: string;
  disabled: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  width?: DimensionValue;
};

const CustomIconButton = ({
  iconName,
  text,
  disabled,
  onPress,
  backgroundColor,
  borderColor,
  textColor,
  width,
}: CustomIconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        style.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : theme.colors.secondary,
          borderColor: borderColor ? borderColor : theme.colors.secondary,
          width: width ? width : '100%',
        },
      ]}>
      <View style={style.subContainer}>
        <View style={style.iconContainer}>
          <Icon
            //@ts-ignore
            name={iconName}
            size={20}
            color={theme.colors.secondary}
          />
        </View>
        <Text
          style={[
            style.text,
            {
              color: textColor ? textColor : theme.colors.white,
            },
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomIconButton;
