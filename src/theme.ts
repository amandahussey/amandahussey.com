import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#150d1b",
    },
    mode: "dark",
  },
  typography: {
    fontFamily: ["Roboto Slab", "serif"].join(","),
  },
});
