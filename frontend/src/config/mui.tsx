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
  const isClient = typeof window !== "undefined"; // Check if running on the client-side

  // Retrieve the previously selected theme from localStorage (or use "dark" as default)
  const storedMode = isClient ? localStorage.getItem("themeMode") : "dark";
  const [mode, setMode] = useState<PaletteMode>(storedMode as PaletteMode);

  // Update the selected theme in localStorage whenever it changes (on the client-side)
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("themeMode", mode);
    }
  }, [isClient, mode]);

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
