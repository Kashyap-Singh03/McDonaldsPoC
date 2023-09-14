import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import theme from '../../Theme/theme';
import {styles} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface LabeledInputTextFieldProps {
  value: string;
  onChangeText?: (val: string) => void;
  labelText?: string;
  lablePlaceHolder?: string;
  maxLength?: number;
  isError?: boolean;
  errorText?: string;
  keyboardType?: any;
  onBlur?: () => void;
  secureTextEntry?: boolean;
  isPassword?: boolean;
}

const LabeledInputTextField: React.FC<LabeledInputTextFieldProps> = props => {
  const keyboardType = props?.keyboardType ? props?.keyboardType : 'default';
  const [isPasswordVisible, setIsPasswordVisible] = useState(
    !props.secureTextEntry,
  );

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {props.labelText ? (
        <Text style={styles.labelText}>{props.labelText}</Text>
      ) : null}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={props.lablePlaceHolder}
          placeholderTextColor={theme.colors.disableTextColor}
          maxLength={props.maxLength}
          onBlur={props.onBlur}
          value={props.value}
          onChangeText={val => props.onChangeText?.(val)}
          keyboardType={keyboardType}
          secureTextEntry={!isPasswordVisible}
        />
        {props.isPassword ? (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={togglePasswordVisibility}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color={theme.colors.disableTextColor}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
      {props.isError ? (
        <Text style={styles.errorText}>{props.errorText}</Text>
      ) : null}
    </View>
  );
};

export default LabeledInputTextField;
