import React, {CSSProperties} from 'react'
import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: CSSProperties['color'];
    };
  }
  interface Palette {
    white: Palette['primary'];
    gray: Palette['primary'];
    black: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
  }
  interface PaletteColor {
    darker?: string;
    lighter?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }
  interface ThemeOptions {
    status: {
      danger: CSSProperties['color'];
    };
  }
}


export default createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#3D9DF3',
    },
    secondary: {
      main: '#FFCE46'
    },
    white: {
      main: '#ffffff',
      darker: '#f8f8fe',
    },
    gray: {
      main: '#B7B7B7',
      darker: '#444444',
    },
    black: {
      main: '#1a1d27',
      lighter: '#24283b',
    },
  },
});