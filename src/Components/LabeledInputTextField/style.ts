import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  iconContainer: {
    padding: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.colors.black,
  },
  errorText: {
    color: theme.colors.error,
  },
  labelText: {
    color: theme.colors.black,
    fontSize: theme.fonts.h8.fontSize,
  },
  textInput: {
    backgroundColor: theme.colors.white,
    flex: 1,
    fontSize: theme.fonts.body1.fontSize,
    color: theme.colors.black,
  },
});
