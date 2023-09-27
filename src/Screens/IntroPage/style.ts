import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';
const image1Width = theme.dimensions.maxWidth * 0.4;
const image2Width = theme.dimensions.maxWidth * 0.9;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    paddingTop: 20,
    width: '100%',
  },
  imgLogoStyle: {
    width: image1Width,
    height: image1Width * 0.7,
  },
  logoStyle: {
    marginBottom: '4%',
    alignItems: 'center',
  },
  imgManStyle: {width: image2Width, height: image2Width * 0.9},
  manStyle: {
    marginBottom: '4%',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    padding: 8,
  },
  textHeaderStyle: {
    fontSize: theme.fonts.h5.fontSize,
    textAlign: 'center',
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  textBodyStyle: {
    fontSize: theme.fonts.h8.fontSize,
    textAlign: 'center',
    color: theme.colors.white,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '12%',
  },
});
