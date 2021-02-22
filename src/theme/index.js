import typographyVariants from './typographyVariants';

const colors = {
  background: {
    dark: {
      color: '#E9C46A',
    },
    main: {
      color: '#FFF8E6',
    },
  },
  borders: {
    main: {
      color: '#E9C46A',
    },
  },
  primary: {
    main: {
      color: '#E9C46A',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FFF8E6',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  fontFamily: '\'Rubika\', sans-serif',
  transition: '200ms ease-in-out',
};
