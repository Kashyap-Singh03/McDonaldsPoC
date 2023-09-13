import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    marginTop: 20,
  },
  imageContainer: {
    alignItems: 'center',
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
  errorText: {
    fontSize: 10,
    color: theme.colors.error,
  },
  errorInput: {
    borderColor: theme.colors.error,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
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
});
