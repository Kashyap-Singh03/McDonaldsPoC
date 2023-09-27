import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  genderStyle1: {
    color: 'grey',
    fontSize: theme.fonts.body1.fontSize,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  accoutExistStyle: {
    color: theme.colors.black,
    fontSize: theme.fonts.h8.fontSize,
  },
  accoutExistBtnStyle: {
    color: theme.colors.secondary,
    fontSize: theme.fonts.h8.fontSize,
  },
  accountExistViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  genderStyle: {
    color: theme.colors.black,
    marginLeft: 12,
    marginVertical: 10,
    fontSize: theme.fonts.h8.fontSize,
  },
  genderViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 16,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewHeaderStyle: {
    paddingTop: 12,
    alignItems: 'center',
    paddingBottom: 12,
  },
  textHeaderStyle: {
    fontSize: theme.fonts.h5.fontSize,
    color: theme.colors.black,
    fontWeight: '400',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
});
