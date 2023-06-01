import React, { FC } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material";
import { hexToRgba } from "../helpers";
import ThemeSelect from "./ThemeSelect";
import LanguageSelect from "./LanguageSelect";

const ConfigMenu: FC = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          transform: "translateY(4px)",
          cursor: "pointer",
          color: `${theme.palette.secondary.light}`,
          transition: `all 0.2s ${theme.transitions.easing.easeInOut}`,
          "&:hover": {
            color: `${theme.palette.secondary.main}`,
            transform: "translateY(4px) rotate(90deg)",
          },
          "&:active": {
            color: `${theme.palette.secondary.dark}`,
            transform: "translateY(8px) rotate(-90deg)",
          },
        }}
        onMouseEnter={() => {
          const dot = document.getElementById("dot");
          if (dot) {
            dot.style.setProperty(
              "transform",
              "translateX(228px) translateY(8px)"
            );
            dot.style.setProperty("opacity", "1");
          }
        }}
        onMouseLeave={() => {
          const dot = document.getElementById("dot");
          if (dot) {
            dot.style.setProperty(
              "transform",
              "translateX(228px) translateY(8px)"
            );
            dot.style.setProperty("opacity", "0");
          }
        }}
      >
        <SettingsRoundedIcon />
      </IconButton>

      <Menu
        id="config-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            marginLeft: "1rem",
            color: theme.palette.secondary.light,
            background: hexToRgba(theme.palette.primary.light, 0.75),
            borderRadius: "16px",
            border: `1px ${hexToRgba(theme.palette.common.white, 0.1)} solid`,
            borderBottom: `1px ${hexToRgba(
              theme.palette.common.black,
              0.3
            )} solid`,
            borderRight: `1px ${hexToRgba(
              theme.palette.common.black,
              0.3
            )} solid`,
            boxShadow: `8px 8px 8px ${hexToRgba(
              theme.palette.primary.main,
              0.35
            )}`,
            backdropFilter: "blur(12px)",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ThemeSelect />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LanguageSelect />
        </MenuItem>
      </Menu>
    </>
  );
};

export default ConfigMenu;
