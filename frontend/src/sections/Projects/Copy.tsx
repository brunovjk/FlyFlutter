import React, { FC } from "react";
import { Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const Copy: FC = () => {
  const { t } = useTranslation();
  return (
    <Stack spacing={3} padding={3} justifyContent="center">
      <Typography gutterBottom variant="h3" textAlign="center">
        {t("about.title1")}
      </Typography>
      <Typography gutterBottom variant="h5" textAlign="center">
        {t("about.title2")}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {t("about.body1")} <br /> {t("about.body2")} <br /> {t("about.body3")}
      </Typography>
    </Stack>
  );
};

export default Copy;
