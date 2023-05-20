import React, { FC } from "react";
import { Typography, Stack } from "@mui/material";
import { about } from "../../copy";

const Copy: FC = () => {
  return (
    <Stack spacing={3} justifyContent="center">
      <Typography
        variant="h1"
        textAlign="center"
        sx={{
          fontSize: { xs: "1.75rem", md: "3.5rem" },
          textAlign: "left",
          letterSpacing: { xs: "-1.4px", md: "-3px" },
          marginBottom: { xs: 2, md: "32px" },
        }}
      >
        {about.title}
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{
          fontSize: "1.125rem",
          textAlign: "left",
        }}
      >
        {about.body1} <br /> {about.body2} <br /> {about.body3}
      </Typography>
    </Stack>
  );
};

export default Copy;
