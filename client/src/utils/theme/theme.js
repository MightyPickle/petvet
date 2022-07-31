import { createTheme } from '@mui/material/styles';
import sx from '@mui/system/sx';

const theme = createTheme({
  palette: {
    primary: { main: '#FFD35A' },
    secondary: { main: '#2568FB' },
    neutral: { main: '#D9D9D9' },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: sx({
          borderRadius: 100,
        }),
      },
    },
  },

});

export default theme;
