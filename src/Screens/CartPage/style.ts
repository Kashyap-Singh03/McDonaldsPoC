import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 150,
    backgroundColor: theme.colors.primary,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  bottomContainer: {
    color: theme.colors.secondary,
    fontSize: theme.fonts.h5.fontSize,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
  },
  scrollViewStyle: {
    position: 'absolute',
    marginTop: 70,
    height: theme.dimensions.maxHeight,
  },
  viewStyle: {margin: 10},
  totalItemViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  totalItemTextStyle: {
    marginBottom: 20,
    marginTop: 20,
    color: theme.colors.black,
  },
  totalPriceText: {
    marginBottom: 20,
    marginTop: 5,
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: theme.fonts.h7.fontSize,
  },
  gratisStyle: {marginBottom: 20, color: theme.colors.black},
  dummyView: {marginTop: 120},
  btn: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
    flex: 1,
  },
});
