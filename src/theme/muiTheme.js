import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    body1: {
      fontFamily: `'Varela Round', sans-serif`
    },
    h2: {
      fontFamily: `'Suez One', serif`,
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontFamily: `'Varela Round', sans-serif`
    }
  },
  palette: {
    primary: {
        light: '#63ccff',
        main: '#1d5fd8',
        dark: '#006db3',
        contrastText: '#fff',
    },
    text:{
        primary : '#fff',
        textSecondary : 'rgba(0, 0, 0, 0.85)'
    }
    },
    breakpoints: {
      values: {
        xs: 375,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      }
    }
});

export default theme;