import React, { FC } from "react";
import { Stack } from "@mui/material";
import { CustomTypography } from "@/components/atoms";
import { contact } from "@/assets/copy";

const ContactCopy: FC = () => {
  return (
    <Stack spacing="20px">
      <CustomTypography
        variant="h1"
        sx={{
          fontWeight: "regular",
          fontSize: { xs: "1.75rem", md: "3.5rem" },
          textAlign: "left",
          letterSpacing: { xs: "-1.4px", md: "-3px" },
        }}
      >
        {contact.title}
      </CustomTypography>
      <CustomTypography
        variant="body1"
        sx={{
          fontWeight: "regular",
          fontSize: "1.125rem",
          textAlign: "left",
          paddingBottom: { xs: "24px", md: "32px" },
        }}
      >
        {contact.body1}
      </CustomTypography>
      <CustomTypography
        variant="body1"
        sx={{
          fontWeight: "bold",
          fontSize: "1.25rem",
          textAlign: "left",
        }}
      >
        {contact.body2}
      </CustomTypography>
      <CustomTypography
        variant="body1"
        sx={{
          fontWeight: "regular",
          fontSize: "1.125rem",
          textAlign: "left",
        }}
      >
        {contact.body3} <strong>{contact.email}</strong> {contact.body4}
      </CustomTypography>
    </Stack>
  );
};

export default ContactCopy;
