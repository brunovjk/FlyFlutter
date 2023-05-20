import React, { FC } from "react";

import { Typography } from "@mui/material";

const FFLogo: FC = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontWeight: "regular",
          fontSize: { xs: "1.75rem", md: "3.5rem" },
          lineHeight: { xs: "1.75rem", md: "3.5rem" },
          textAlign: "center",
          letterSpacing: { xs: "-1.4px", md: "-3px" },
        }}
      >
        FlyFlutter
      </Typography>
    </>
  );
};

export default FFLogo;
