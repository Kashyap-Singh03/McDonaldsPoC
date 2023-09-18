import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  animationContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 0.4,
  },
  bottomContainer: {
    flex: 0.85,
    backgroundColor: theme.colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  itemNameText: {
    marginLeft: 20,
    color: theme.colors.black,
    fontSize: theme.fonts.h5.fontSize,
    fontWeight: '700',
    marginRight: 20,
    marginTop: 60,
  },
  itemPriceText: {
    marginLeft: 20,
    color: theme.colors.primary,
    fontSize: theme.fonts.h5.fontSize,
    marginRight: 20,
  },
  itemDescriptionText: {
    marginLeft: 20,
    color: theme.colors.black,
    marginTop: 12,
    marginRight: 20,
  },
  optionalView: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 12,
    alignItems: 'center',
    marginRight: 20,
  },
  optionalText: {
    color: theme.colors.black,
    fontSize: theme.fonts.h7.fontSize,
    fontWeight: '500',
  },
  optionalTextMsg: {color: theme.colors.disableTextColor},
  textInputStyle: {
    backgroundColor: theme.colors.textBoxBackground,
    borderRadius: 10,
    alignSelf: 'center',
    width: '90%',
    margin: 20,
  },
  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  quantityLeftBtn: {
    backgroundColor: theme.colors.disableBackgroundColor,
    borderRadius: 4,
    padding: 5,
  },
  quantityText: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    color: theme.colors.black,
  },
  quantityRightBtn: {
    backgroundColor: theme.colors.disableBackgroundColor,
    borderRadius: 4,
    padding: 5,
  },
  btnView: {margin: 20, flexDirection: 'row'},
  cartBtn: {
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    borderColor: theme.colors.black,
    borderWidth: 1,
    padding: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  animationView: {
    position: 'absolute',
    top: 10,
    left: 6,
    right: 0,
    alignItems: 'center',
  },
  animationImage: {width: 240, height: 240},
});
