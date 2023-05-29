import React, { FC } from "react";
import { AppBar, Toolbar } from "@mui/material";
import Links from "./Links";
import { ConfigMenu, Logo } from "../index";
import { IParallax } from "@react-spring/parallax";

const Header: FC<{ parallax: React.MutableRefObject<IParallax> }> = ({
  parallax,
}) => {
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <Toolbar>
        <Logo />
        <Links parallax={parallax} />
        <ConfigMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
