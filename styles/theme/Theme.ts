import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default lightTheme;
