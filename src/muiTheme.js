/* https://mui.com/customization/theming/ */
import { createTheme } from '@mui/material/styles';

export const FONTS = {
  primary: ['ProximaNova', 'Arial', 'sans-serif'].join(','),
  secondary: ['ProximaNova', 'Arial', 'sans-serif'].join(','),
};

export const PALETTE = {
  mode: 'dark',
  background: {
    default:'rgba(18, 18, 22, 1)', //'rgba(31, 32, 40, 1)'
    paper: 'rgba(24, 24, 32, 1)', //rgba(40, 41, 49, 1)',
    black: '#1F2028',
  },
  primary: {
    light: '#EBBF6E',
    main: 'rgba(255, 255, 255, 1)',
    dark: 'var(--color-blue-hover)',
  },
  secondary: {
    light: 'rgba(56, 57, 68, 1)',
    main: 'rgba(40, 41, 49, 1)',
    dark: 'rgba(31, 32, 40, 1)',
  },
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(149, 151, 161, 1)',
    disabled: 'rgba(161, 161, 161, 1)',
  },
  button: {
    main: 'rgba(199, 99, 247, 1)',// purple
    medium: 'rgba(199, 99, 247, 0.5)', // rgba(38, 90, 204, 1)
    dark: 'rgba(199, 99, 247, 1)', //'rgba(27, 67, 152, 1)',
  },
  numbers:{
    positive: "rgba(0, 204, 155, 1)",
    negative: "rgba(249, 84, 84, 1)"
  }
  ,
  interactive: {
    primary: 'rgba(199, 99, 247, 1)',//rgba(58, 120, 255, 1)
    success: "rgba(103, 180, 245, 1)",//'rgba(24, 223, 139, 1)',
    success50: 'rgba(103, 180, 245, 0.5)',
    error: "rgba(249, 84, 84, 1)", //'rgba(233, 61, 68, 1)',
    error50: 'rgba(249, 84, 84, 0.5)',
    tan: 'rgba(255, 231, 206, 1)',
    delimiter: 'rgba(49, 50, 60, 1)',
    warning: 'rgba(220, 148, 68, 1)',
    hover: 'rgba(255, 255, 255, 0.08)',
  },
};

export const BREAKPOINTS = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1280,
    xxl: 1440,
  },
};

export const SPACING = 4;


export const SHAPE = {
  borderRadius: {
    verySmall: SPACING,
    small: SPACING * 2,
    medium: SPACING * 4,
    large: SPACING * 6,
  },
  iconSize: {
    small: SPACING * 3,
    medium: SPACING * 4,
    large: SPACING * 5,
    xLarge: SPACING * 6,
    xxLarge: SPACING * 10,
  },
  footerHeight: '56px',
  bannerHeight: '56px',
  drawerWidthDesktop: '224px',
  drawerWidthTablet: '80px',
};

export default createTheme({
  spacing: SPACING,
  palette: PALETTE,
  breakpoints: BREAKPOINTS,
  shape: SHAPE,
  typography: {
    fontFamily: FONTS.primary,
    color: PALETTE.text.primary,
    lineHeight: 1.5,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '1.875rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 300,
      letterSpacing: '0.3px',
    },
    small1: {
      fontSize: '0.875rem',
      fontWeight: 300,
      color: PALETTE.text.secondary,
    },
    small2: {
      fontSize: '0.875rem',
      fontWeight: 300,
      color: PALETTE.text.secondary,
    },
    tiny: {
      fontSize: '0.75rem',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: PALETTE.background.paper,
          borderRadius: SHAPE.borderRadius.medium,
          padding: SPACING * 6,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        paper: {
          padding: 0,
          borderRadius: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        hiddenLabel: {
          /* fix for andtd base styles override. TODO: can be deleted when global antd styles will be removed */
          '& legend': {
            display: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          top: 0,
          border: 'none',
        },
      },
    },
  },
});
