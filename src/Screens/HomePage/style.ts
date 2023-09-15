import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  redBackground: {
    flex: 0.25,
    backgroundColor: theme.colors.secondary,
    padding: 16,
  },
  listItemTextStyle: {
    color: theme.colors.black
  },
  carouselStyle: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 2,
  },
  categoryTextStyle: {
    fontSize: theme.fonts.h7.fontSize,
    color: theme.colors.black,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  specialOfferViewStyle: {
    marginTop: 20,
  },
  specialOfferTextStyle: {
    fontSize: theme.fonts.h7.fontSize,
    color: theme.colors.black,
    fontWeight: 'bold',
  },
  specialOfferStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  specialOfferFlatlistStyle: {
    // width:'80%',
    marginRight: 16,
  },
  whiteBackground: {
    flex: 0.75,
    backgroundColor: theme.colors.white,
    padding: 16,
  },
  carouselContainer: {
    alignItems: 'center',
    marginHorizontal: 0,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  dropdownContainer: {
    borderWidth: 0,
    borderRadius: 8,
  },
  dropdown: {
    width: '60%',
    alignSelf: 'center',
  },
  placeholderStyle: {
    fontSize: 16,
    color: theme.colors.white,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: theme.colors.white,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:theme.colors.black
  },
  searchbar: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
  },
  inActiveDotStyle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: '#D3D3D3',
  },
  dotStyle: {
    width: 20,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: theme.colors.secondary,
  },
  dotContainerStyle: {
    paddingVertical: 10,
  },
});
