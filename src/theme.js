import { pink } from '@material-ui/core/colors';

const primaryLight = '#5c67a3';
const primaryMain = '#3f4771';
const primaryDark = '#2e355b';
const secondaryMain = '#ff4081';
const secondaryLight = '#ff79b0';
const secondaryDark = '#c60055';

const primaryContrastText = '#fff';
const secondaryContrastText = '#000';

const theme = {
  palette: {
    primary: {
      light: primaryLight,
      main: primaryMain,
      dark: primaryDark,
      contrastText: primaryContrastText,
    },
    secondary: {
      light: secondaryMain,
      main: secondaryLight,
      dark: secondaryDark,
      contrastText: secondaryContrastText,
    },
    openTitle: primaryMain,
    protectedTitle: pink['400'],
  },
};

export default theme;
