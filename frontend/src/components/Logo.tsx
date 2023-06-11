import React, { FC } from "react";
import { Typography } from "@mui/material";
import { IParallax } from "@react-spring/parallax";
import Link from "next/link";

const Logo: FC<{
  parallax: React.MutableRefObject<IParallax>;
  isHome?: boolean;
}> = ({ parallax, isHome }) => {
  const handleClick = () => {
    if (isHome) {
      parallax.current.scrollTo(1.5);
    }
  };

  return (
    <Link
      href={isHome ? "#" : "/"}
      onClick={handleClick}
      style={{ textDecoration: "none", flexGrow: 1 }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          cursor: "pointer",
          color: "secondary.light",
          "&:hover": {
            color: "secondary.main",
          },
        }}
      >
        brunovjk
      </Typography>
    </Link>
  );
};

export default Logo;
