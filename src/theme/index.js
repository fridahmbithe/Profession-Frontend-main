import { createTheme, colors } from '@material-ui/core';
import shadows from './shadow';
import typography from './typography';

const theme = createTheme({
  palette: {

    background: {
      default: '#6B8E23',
      paper: colors.blueGrey[100]
    },
    primary: {

      contrastText: '#ffffff',
      main: '#6B8E23'
    },
    text: {
      primary: '#6fa345',
      secondary: '#111111'
    },
  },
  shadows,
  typography
});

export default theme;