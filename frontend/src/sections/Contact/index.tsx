import React from "react";
import { Stack } from "@mui/material";
import { FadeInLayout, IconStack } from "../../components";
import Copy from "./Copy";
import Form from "./Form";
import theme from "../../config/theme";

const Contact: React.FC = () => {
  return (
    <FadeInLayout>
      <Stack spacing={3}>
        <Copy />
        <IconStack color={theme.palette.text.secondary} />
        <Form />
      </Stack>
    </FadeInLayout>
  );
};

export default Contact;
