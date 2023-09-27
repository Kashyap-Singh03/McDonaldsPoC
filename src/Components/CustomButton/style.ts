import {StyleSheet} from 'react-native';
import theme from './../../Theme/theme';

export const style = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  container: {
    height: 60,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    color: theme.colors.black,
    fontSize: theme.fonts.h6.fontSize,
  },
});
