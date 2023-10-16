import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 16,
    paddingTop: 10,
    height: 60,
    marginBottom: 20,
  },
  headerText: {
    color: theme.colors.primary,
    fontSize: 24,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 12,
  },
  previousOrderText: {
    color: theme.colors.black,
    fontSize: 24,
  },
  previousOrderStyle: {
    backgroundColor: theme.colors.disableBackgroundColor,
    marginBottom: 8,
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  previousOrderInnerText: {
    color: theme.colors.black,
    fontSize: 16,
  },
  previousItemsOrderText: {
    color: theme.colors.black,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.ternary,
    marginBottom: 10,
  },
  noRideContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRideImage: {
    width: theme.dimensions.maxWidth * 1,
    height: theme.dimensions.maxHeight * 0.4,
    resizeMode: 'contain',
  },
  profileHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
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
  changeProfileBtn: {
    alignItems: 'center',
  },
  changeProfileText: {
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  modalTitle: {
    alignSelf: 'center',
    fontSize: 20,
    color: theme.colors.black,
    marginBottom: 20,
  },
  modalView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalCamerabtn: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
  modalBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalGallerybtn: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
});
