import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
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
      <Button component={Link} to="/">
        {t("errorPage.homeButton")}
      </Button>
    </Stack>
  );
};

export default ErrorPage;
