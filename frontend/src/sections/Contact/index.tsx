import React from "react";
import { Box, Stack } from "@mui/material";
import { IconStack } from "../../components";
import Copy from "./Copy";
import Form from "./Form";
import theme from "../../config/theme";

const Contact: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "100%", md: "50%" },
        height: "100%",
      }}
    >
      <Stack spacing={2}>
        <Copy color={theme.palette.text.secondary} />
        <IconStack color={theme.palette.text.secondary} />
        <Form color={theme.palette.text.secondary} />
      </Stack>
    </Box>
  );
};

export default Contact;
