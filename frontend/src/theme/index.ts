import { createComponents } from "./components";
import { lightPalette, darkPalette } from "./palettes";
import { typography } from "./typography";
import { Components, PaletteMode, PaletteOptions, Theme } from "@mui/material";

const lightComponents = createComponents(lightPalette);
const darkComponents = createComponents(darkPalette);

export const getTheme = (mode: PaletteMode) => {
  let components: Components<Omit<Theme, "components">> = darkComponents;
  let palette: PaletteOptions = darkPalette;

  if (mode === "light") {
    components = lightComponents;
    palette = lightPalette;
  } else if (mode === "dark") {
    components = darkComponents;
    palette = darkPalette;
  }

  return {
    components,
    palette: {
      mode,
      ...palette,
    },
    typography,
  };
};
