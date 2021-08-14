import { createTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
  },
});

export default theme;
