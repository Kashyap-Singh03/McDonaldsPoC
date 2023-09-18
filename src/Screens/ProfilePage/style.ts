import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:theme.colors.white
  },
  profileHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    borderColor: theme.colors.black,
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  profilePictureText: {
    color: theme.colors.black,
  },
  profileText: {
    color: theme.colors.black,
    fontSize: 16,
  },
  subContainer: {
    paddingHorizontal: 20,
  },
  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileBody: {
    fontSize: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileSubBody: {
    marginLeft: 10,
  },
  iconStyle: {
    paddingTop: 8,
  },
  textColorStyle: {
    color: theme.colors.black,
  },
});
