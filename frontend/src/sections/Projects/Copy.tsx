import React, { FC } from "react";
import { Typography, Stack } from "@mui/material";
import { about } from "../../copy";

const Copy: FC = () => {
  return (
    <Stack spacing={3} justifyContent="center">
      <Typography gutterBottom variant="h3" textAlign="center">
        {about.title1}
      </Typography>
      <Typography gutterBottom variant="h5" textAlign="center">
        {about.title2}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {about.body1} <br /> {about.body2} <br /> {about.body3}
      </Typography>
    </Stack>
  );
};

export default Copy;
