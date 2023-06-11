import React, { FC } from "react";
import { Typography, Link } from "@mui/material";
import { IParallax } from "@react-spring/parallax";

const Logo: FC<{
  parallax: React.MutableRefObject<IParallax>;
  isHome?: boolean;
}> = ({ parallax, isHome }) => {
  const handleClick = () => {
    if (isHome) {
      parallax.current.scrollTo(1.5);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <Link
        onClick={handleClick}
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
