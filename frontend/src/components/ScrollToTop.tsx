import React, { FC } from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { IParallax } from "@react-spring/parallax";

const ScrollToTop: FC<{ parallax: React.MutableRefObject<IParallax> }> = ({
  parallax,
}) => {
  return (
    <Fab
      color="secondary"
      onClick={() => parallax.current.scrollTo(0)}
      style={{ position: "fixed", bottom: 64, right: 64, zIndex: 999 }}
    >
      <KeyboardArrowUp />
    </Fab>
  );
};

export default ScrollToTop;
