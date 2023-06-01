import React from "react";
import { Typography, Stack, Button, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const Custom404 = () => {
  const { t } = useTranslation();

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      spacing={8}
    >
      <Typography variant="h4" component="h1" color="text.secondary">
        {t("errorPage.title")}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {t("errorPage.message")}
      </Typography>
      <Button component={Link} href="/">
        {t("errorPage.homeButton")}
      </Button>
    </Stack>
  );
};

export default Custom404;
