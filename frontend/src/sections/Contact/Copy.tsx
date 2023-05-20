import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { contact } from "../../copy";
import theme from "../../config/theme";

const Copy: FC = () => {
  return (
    <Stack spacing={3}>
      <Typography
        variant="h1"
        color={theme.palette.text.secondary}
        sx={{
          fontWeight: "regular",
          fontSize: { xs: "1.75rem", md: "3.5rem" },
          textAlign: "left",
          letterSpacing: { xs: "-1.4px", md: "-3px" },
        }}
      >
        {contact.title}
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.text.secondary}
        sx={{
          fontWeight: "regular",
          fontSize: "1.125rem",
          textAlign: "left",
          paddingBottom: { xs: "24px", md: "32px" },
        }}
      >
        {contact.body1}
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.text.secondary}
        sx={{
          fontWeight: "bold",
          fontSize: "1.25rem",
          textAlign: "left",
        }}
      >
        {contact.body2}
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.text.secondary}
        sx={{
          fontWeight: "regular",
          fontSize: "1.125rem",
          textAlign: "left",
        }}
      >
        {contact.body3} <strong>{contact.email}</strong> {contact.body4}
      </Typography>
    </Stack>
  );
};

export default Copy;
