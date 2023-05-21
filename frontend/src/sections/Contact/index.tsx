import React from "react";
import { Container, Stack } from "@mui/material";
import { FadeInLayout, IconStack } from "../../components";
import Copy from "./Copy";
import Form from "./Form";
import theme from "../../config/theme";

const Contact: React.FC = () => {
  return (
    <FadeInLayout>
      <Container maxWidth="xl" sx={{ bgcolor: "#121212", padding: 4 }}>
        <Stack spacing={2}>
          <Copy />
          <IconStack color={theme.palette.text.secondary} />
          <Form />
        </Stack>
      </Container>
    </FadeInLayout>
  );
};

export default Contact;
