import React from 'react';
import { Text, TextInput, View } from 'react-native';
import theme from '../../Theme/theme';
import { styles } from './style';

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
}

const LabeledInputTextField: React.FC<LabeledInputTextFieldProps> = props => {
  const keyboardType = props?.keyboardType ? props?.keyboardType : 'default';

  return (
    <View style={styles.container}>
      {props.labelText ? (
        <Text style={styles.labelText}>{props.labelText}</Text>
      ) : null}
      <TextInput
        style={styles.textInput}
        placeholder={props.lablePlaceHolder}
        placeholderTextColor={theme.colors.disableTextColor}
        maxLength={props.maxLength}
        onBlur={props.onBlur}
        value={props.value}
        onChangeText={val => props.onChangeText?.(val)}
        keyboardType={keyboardType}
      />
      {props.isError ? (
        <Text style={styles.errorText}>{props.errorText}</Text>
      ) : null}
    </View>
  );
};

export default LabeledInputTextField;
