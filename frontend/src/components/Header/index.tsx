import React, { FC, ReactElement } from "react";
import { AppBar, Box, Slide, Toolbar, useScrollTrigger } from "@mui/material";
import Links from "./Links";
import Logo from "./Logo";
import IconStack from "../IconStack";

interface HideOnScrollProps {
  children: ReactElement;
}

const HideOnScroll: FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header: FC = () => {
  return (
    <HideOnScroll>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <Logo />
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconStack color="text.secondary" />
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Links />
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
