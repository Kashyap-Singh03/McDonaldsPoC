import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: theme.dimensions.maxWidth / 2.4,
    height: 300,
  },
  fixedHeightContainer: {
    borderWidth: 1,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.white,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    padding: 2,
  },
  textStyle: {
    color: theme.colors.black,
    fontSize: theme.fonts.h8.fontSize,
    fontWeight: '500',
    textAlign: 'center',
  },
  textStyle1: {
    color: theme.colors.primary,
    fontSize: theme.fonts.h8.fontSize,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    marginLeft: -55,
  },
  buttonWrapper: {
    marginBottom: -20,
  },
});
