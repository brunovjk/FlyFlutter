import useMediaQuery from "@mui/material/useMediaQuery";

import { Breakpoint, useTheme } from "@mui/material/styles";

export function useIsDownScreen(size: number | Breakpoint) {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down(size));

  return isSmallScreen;
}

export function useIsUpScreen(size: number | Breakpoint) {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.up(size));

  return isSmallScreen;
}
