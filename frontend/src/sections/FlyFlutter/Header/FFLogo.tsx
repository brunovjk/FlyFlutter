import React, { FC } from "react";

import { Typography, styled } from "@mui/material";
import theme from "../../../config/theme";

const LogoTypography = styled(Typography)(() => ({
  color: theme.palette.secondary.light,
  transition: "all 0.9s ease-in-out",
  transform: "scale(1)",
  "&:hover": {
    color: theme.palette.secondary.main,
    transform: "scale(1.1)",
  },
}));

const FFLogo: FC = () => {
  return (
    <>
      <LogoTypography variant="h3" alignContent="center" textAlign="center">
        <strong>Fly</strong>Flutter
      </LogoTypography>
    </>
  );
};

export default FFLogo;
