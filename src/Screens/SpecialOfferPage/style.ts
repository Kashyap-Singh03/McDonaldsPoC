import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.disableBackgroundColor,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    color: theme.colors.black,
  },
  flatListItem: {
    padding: 10,
  },
});
