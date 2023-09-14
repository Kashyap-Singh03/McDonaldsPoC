import {StyleSheet} from 'react-native';
import theme from '../../Theme/theme';
export const styles = StyleSheet.create({
  container: {
    width: theme.dimensions.maxWidth * 0.9, 
    height: theme.dimensions.maxHeight * 0.25, 
    borderRadius: 10, 
    overflow: 'hidden', 
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
});
