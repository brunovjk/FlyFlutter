import React, { createContext, useMemo, useState, useEffect } from "react";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { getTheme } from "../theme";

export const MuiContext = createContext({
  toggleColorMode: () => {},
});

export default function MuiWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // Retrieve the previously selected theme from localStorage (or use "dark" as default)
  const storedMode =
    (localStorage.getItem("themeMode") as PaletteMode) || "dark";
  const [mode, setMode] = useState<PaletteMode>(storedMode);

  // Update the selected theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const muiUtils = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const currentTheme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  const theme = responsiveFontSizes(currentTheme);

  return (
    <MuiContext.Provider value={muiUtils}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiContext.Provider>
  );
}
