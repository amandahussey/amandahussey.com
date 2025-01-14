import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#150d1b",
    },
    secondary: {
      main: "#E91E63",
    },
    mode: "dark",
  },
  typography: {
    fontFamily: ["Roboto Slab", "serif"].join(","),
  },
});
