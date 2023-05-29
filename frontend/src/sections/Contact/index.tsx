import React, { FC } from "react";
import { Box, useTheme } from "@mui/material";
import { IconStack, TrailFromX } from "../../components";
import Copy from "./Copy";
import Form from "./Form";
import { useInView } from "@react-spring/web";

const Contact: FC = () => {
  const theme = useTheme();
  const [ref, isInView] = useInView({});

  return (
    <Box
      component="div"
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "100%", md: "50%" },
        height: "100%",
      }}
    >
      <TrailFromX isConnected={!isInView} itemStyle={{ marginBottom: "32px" }}>
        <Copy color={theme.palette.text.secondary} />
        <IconStack color={theme.palette.text.secondary} />
        <Form color={theme.palette.text.secondary} />
      </TrailFromX>
    </Box>
  );
};

export default Contact;
