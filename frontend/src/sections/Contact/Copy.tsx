import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Copy: FC = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={3}>
      <Typography gutterBottom variant="h3">
        {t("contact.title")}
      </Typography>
      <Typography variant="body1">{t("contact.body1")}</Typography>
      <Typography variant="body1">{t("contact.body2")}</Typography>
      <Typography variant="body1">
        {t("contact.body3")} <strong>{t("contact.email")}</strong>{" "}
        {t("contact.body4")}
      </Typography>
    </Stack>
  );
};

export default Copy;
