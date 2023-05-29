import React, { FC, useContext } from "react";
import { MuiContext } from "../config/mui";
import { MenuItem, FormControl, useTheme, Select } from "@mui/material";

const ThemeSelect: FC = () => {
  const theme = useTheme();

  const { toggleColorMode } = useContext(MuiContext);

  const handleThemeChange = () => {
    toggleColorMode();
  };

  return (
    <FormControl variant="standard">
      <Select value={theme.palette.mode} onChange={handleThemeChange}>
        <MenuItem value="light">
          <span role="img" aria-label="Light Mode">
            🌞
          </span>
        </MenuItem>
        <MenuItem value="dark">
          <span role="img" aria-label="Dark Mode">
            🌙
          </span>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeSelect;
