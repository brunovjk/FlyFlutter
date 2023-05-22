import React from "react";
import { Box, Stack } from "@mui/material";
import { FadeInLayout, IconStack } from "../../components";
import Copy from "./Copy";
import Form from "./Form";
import theme from "../../config/theme";

const Contact: React.FC = () => {
  return (
    <FadeInLayout>
      <Box
        component="div"
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Stack spacing={2}>
          <Copy />
          <IconStack color={theme.palette.text.secondary} />
          <Form />
        </Stack>
      </Box>
    </FadeInLayout>
  );
};

export default Contact;
