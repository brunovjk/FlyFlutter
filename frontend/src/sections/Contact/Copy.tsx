import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { contact } from "../../copy";
import theme from "../../config/theme";

const Copy: FC<IconStackProps> = ({ color }) => {
  return (
    <Stack spacing={3}>
      <Typography gutterBottom variant="h2" color={color}>
        {contact.title}
      </Typography>
      <Typography variant="body1" color={color}>
        {contact.body1}
      </Typography>
      <Typography variant="body1" color={color}>
        {contact.body2}
      </Typography>
      <Typography variant="body1" color={color}>
        {contact.body3} <strong>{contact.email}</strong> {contact.body4}
      </Typography>
    </Stack>
  );
};

export default Copy;
