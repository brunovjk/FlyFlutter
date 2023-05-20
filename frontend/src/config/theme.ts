import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
      },
    },
  },
  OutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
      },
    },
  },
};
const palette = {
  primary: {
    light: "#1b1b2f",
    main: "#080817",
    dark: "#04040c",
  },
  secondary: {
    light: "#ffef8c",
    main: "#ffcc00",
    dark: "#b38f00",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(255, 255, 255, 0.87)",
  },
  common: {
    black: "rgba(0, 0, 0, 0.87)",
    white: "rgba(255, 255, 255, 0.87)",
    grey: "rgba(125, 125, 125, 0.87)",
    lightGrey: "rgba(200, 200, 200, 0.87)",
  },
};
const typography = {
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};
let theme = createTheme({
  components,
  palette,
  typography,
});

theme = responsiveFontSizes(theme);
export default theme;
