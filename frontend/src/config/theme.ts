import {
  Components,
  Theme,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { hexToRgba } from "../helpers";

const palette = {
  primary: {
    light: "#1b1b2f",
    main: "#080817",
    dark: "#04040c",
  },
  secondary: {
    light: "#fffbe8",
    main: "#ffcc00",
    dark: "#b38f00",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(255, 255, 255, 0.87)",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
};

const components: Components<Omit<Theme, "components">> = {
  MuiTypography: {
    styleOverrides: {
      body1: {
        fontSize: "1.125rem",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        scrollbarColor: "transparent",
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          width: "8px",
          borderRadius: "10px",
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderRadius: "10px",
          backgroundColor: palette.primary.main,
          minHeight: "24px",
          border: `2px solid ${palette.secondary.dark}`,
        },
        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
          {
            backgroundColor: palette.primary.light,
          },
        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
          {
            backgroundColor: palette.secondary.dark,
          },
        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
          {
            backgroundColor: palette.secondary.main,
          },
        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
          backgroundColor: palette.secondary.dark,
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "16px",
        paddingInline: "24px",
        color: palette.primary.main,
        backgroundColor: palette.secondary.main,
        boxShadow: `8px 8px 8px ${hexToRgba(palette.primary.main, 0.35)}`,
        "&:hover": {
          color: palette.secondary.main,
          backgroundColor: palette.primary.main,
          boxShadow: `16px 16px 16px ${hexToRgba(palette.primary.main, 0.35)}`,
        },
        "&:active": {
          color: palette.secondary.main,
          backgroundColor: palette.primary.main,
          boxShadow: `2px 2px 2px ${hexToRgba(palette.primary.main, 0.35)}`,
        },
        "&:disabled": {
          boxShadow: `0px 0px 0px ${hexToRgba(palette.primary.main, 0.35)}`,
        },
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        borderRadius: "18px",
        paddingInline: "18px",
        color: palette.primary.main,
        backgroundColor: palette.secondary.main,
        boxShadow: `8px 8px 8px ${hexToRgba(palette.primary.main, 0.35)}`,
        "&:hover": {
          color: palette.secondary.main,
          backgroundColor: palette.primary.main,
          boxShadow: `16px 16px 16px ${hexToRgba(palette.primary.main, 0.35)}`,
        },
        "&:active": {
          color: palette.secondary.main,
          backgroundColor: palette.primary.main,
          boxShadow: `2px 2px 2px ${hexToRgba(palette.primary.main, 0.35)}`,
        },
        "&.Mui-selected": {
          color: palette.secondary.main,
          backgroundColor: palette.primary.main,
          borderColor: palette.secondary.main,
          boxShadow: `2px 2px 2px ${hexToRgba(palette.primary.main, 0.35)}`,
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: palette.secondary.main,
        "&.Mui-disabled": {
          color: palette.secondary.dark,
        },
      },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      root: {
        color: palette.secondary.main,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        borderRadius: "16px",
        color: palette.secondary.light,

        "&.Mui-focused": {
          color: palette.secondary.light,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "16px",
        color: palette.common.white,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.secondary.light,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.secondary.dark,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.secondary.main,
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          color: palette.secondary.main,
        },
      },
    },
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
