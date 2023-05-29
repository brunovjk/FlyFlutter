import React, { FC, useContext } from "react";
import { ConfigContext } from "../config/context";
import { MenuItem, FormControl, useTheme, Select } from "@mui/material";

const ThemeSelect: FC = () => {
  const theme = useTheme();

  const { toggleColorMode } = useContext(ConfigContext);

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
