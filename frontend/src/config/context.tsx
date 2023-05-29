import React, { createContext, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { getTheme } from "../theme";

export const ConfigContext = createContext({
  toggleColorMode: () => {},
});

export default function ConfigWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>("light");
  const configUtils = useMemo(
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
    <ConfigContext.Provider value={configUtils}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ConfigContext.Provider>
  );
}
