import React, { FC, useState, useEffect } from "react";
import { AppBar, Toolbar } from "@mui/material";
import Links from "./Links";
import Logo from "./Logo";

const Header: FC = () => {
  const [scrollPos, setScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.documentElement.scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        transform: `translateY(${scrollPos === 0 ? "0" : "-100%"})`,
        transition: "transform 300ms ease-in-out",
      }}
    >
      <Toolbar>
        <Logo />
        <Links />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
