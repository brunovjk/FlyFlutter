import React, { FC } from "react";
import { Typography, Link } from "@mui/material";
import { IParallax } from "@react-spring/parallax";

const Logo: FC<{ parallax: React.MutableRefObject<IParallax> }> = ({
  parallax,
}) => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <Link
        onClick={() => parallax.current.scrollTo(1.5)}
        sx={{
          cursor: "pointer",
          textDecoration: "none",
          color: "secondary.light",
          "&:hover": {
            color: "secondary.main",
          },
        }}
      >
        brunovjk
      </Link>
    </Typography>
  );
};

export default Logo;
