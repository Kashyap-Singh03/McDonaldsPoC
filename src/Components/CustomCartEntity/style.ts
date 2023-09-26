import {StyleSheet} from 'react-native';
import theme from './../../Theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    width: '100%',
    alignItems: 'center',
    padding: 15,
    height: 110,
    elevation: 8,
    borderColor: theme.colors.white,
  },
  imageContainer: {
    width: '20%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 150,
  },
  textHeaderStyle: {
    fontSize: theme.fonts.h8.fontSize,
    fontWeight: '600',
    color: theme.colors.black,
  },
  counterStyle: {
    backgroundColor: theme.colors.disableBackgroundColor,
    borderRadius: 4,
    padding: 5,
  },
  viewContainer1: {
    width: '60%',
    paddingLeft: 30,
  },
  viewSubContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textSubContainer1: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    color: theme.colors.black,
  },
  viewContainer2: {
    width: '20%',
    justifyContent: 'space-between',
  },
  textPrice: {
    fontSize: theme.fonts.h8.fontSize,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});
