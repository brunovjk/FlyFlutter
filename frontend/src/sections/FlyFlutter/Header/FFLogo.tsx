import React, { FC } from "react";

import { Typography, styled } from "@mui/material";

const LogoTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  transition: "all 0.6s ease-in-out",
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
