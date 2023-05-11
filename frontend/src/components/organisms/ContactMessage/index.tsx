import React, { FC } from "react";
import { Stack, TextField } from "@mui/material";
import { CustomButton } from "@/components/atoms";
import { contact } from "@/assets/copy";

const ContactMessage: FC = () => {
  return (
    <Stack spacing="20px">
      <TextField
        id="contact-send-message"
        placeholder={contact.placeholder}
        multiline
        minRows={4}
      />
      <CustomButton variant="outlined" sx={{ maxWidth: "192px" }}>
        {contact.sendButton}
      </CustomButton>
    </Stack>
  );
};
export default ContactMessage;
