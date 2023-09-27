import {Dimensions} from 'react-native';

const theme = {
  colors: {
    primary: '#FFC72C',
    secondary: '#DA291C',
    ternary: '#27251F',
    background: '#FFFFFF',
    text: '#000000',
    intermediate: '#49454F',
    disableTextColor: '#ABA8AB',
    disableBackgroundColor: '#E3DFE3',
    white: '#FFFFFF',
    elevationColor: '#f5f5f5',
    underlayColor: '#E7DDF7',
    alertBorderColor: '#000',
    transparent: 'transparent',
    blackOpacity2: 'rgba(0,0,0,2)',
    blackOpacity3: 'rgba(0,0,0,3)',
    blackOpacity5: 'rgba(0,0,0,0.7)',
    black: '#000000',
    error: '#ff0000',
    textBoxBackground: '#f0f0f0',
    iconColor: '#808e9b',
  },
  dimensions: {
    maxWidth: Dimensions.get('window').width,
    maxHeight: Dimensions.get('window').height,
  },
  fonts: {
    pageTitle: {
      fontSize: 24,
    },
    pageSubTitle: {
      fontSize: 20,
    },
    listTitle: {
      fontSize: 17,
    },
    h1: {
      fontSize: 96,
    },
    h2: {
      fontSize: 60,
    },
    h3: {
      fontSize: 42,
    },
    h4: {
      fontSize: 32,
    },
    h5: {
      fontSize: 26,
    },
    h6: {
      fontSize: 21,
    },
    h7: {
      fontSize: 20,
    },
    h8: {
      fontSize: 18,
    },
    h9: {
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 15,
    },
    subtitle0: {
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 15,
    },
    subtitle2: {
      fontSize: 12,
    },
  },
};

export default theme;
