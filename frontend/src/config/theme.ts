import type {} from "@mui/lab/themeAugmentation";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const typography = {
  fontFamily: roboto.style.fontFamily,
};
const palette = {
  primary: {
    main: "#56BBF1",
    dark: "#4D77FF",
    light: "#5EE6EB",
  },
  secondary: {
    main: "#F2FA5A",
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

const components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        scrollbarColor: `${palette.primary.dark} ${palette.primary.light}`,
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          width: "8px",
          borderRadius: "10px",
          background: `linear-gradient(${palette.primary.main}, ${palette.primary.dark})`,
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderRadius: "10px",
          backgroundColor: palette.primary.main,
          minHeight: "24px",
          border: `2px solid ${palette.primary.dark}`,
        },
        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
          {
            backgroundColor: palette.primary.light,
          },
        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
          {
            backgroundColor: palette.primary.dark,
          },
        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
          {
            backgroundColor: palette.primary.light,
          },
        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
          backgroundColor: palette.primary.dark,
        },
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: { color: "rgba(255, 255, 255, 0.87)" },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {},
    },
  },
};

export const theme = createTheme({
  palette,
  components,
  typography,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E384FF",
      dark: "#c014eb",
      light: "#FFA3FD",
    },
    secondary: {
      main: "#865DFF",
    },
    background: {
      default: "#191825",
    },
  },
});
