import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  primay: '#F52D56',
  accent: '#FF9500',
  white: '#FFFF',
  yellow: '#F4D03F',
  background: '#F5F5F5',
  header: '#EDEAEA',
  icon: '#BFBEC4',
  headline: '#C1COC9',
  title: '#262628',
  subtitle: '#9B9B9B',
  blue: '#146C94',
};

export const SIZES = {
  base: 10,
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
  padding: 16,

  width,
  height,
};

export const FONTWEIGHT = {
  bold: 'bold',
  normal: 'normal',
  weight700: '700',
  weight500: '500',
};

export const VIEWS = {
  divider: {
    backgroundColor: COLORS.darkGrey,
  },
};

export const SCREEN_SIZE = Dimensions.get('screen');