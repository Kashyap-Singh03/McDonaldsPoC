import {StyleSheet} from 'react-native';
import theme from './../../Theme/theme';

export const style = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  container: {
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: theme.colors.black,
    fontSize: 16,
    marginLeft: 10,
  },
});
