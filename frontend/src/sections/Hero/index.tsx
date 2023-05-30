import React, { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ConnectButton, TrailFromX } from "../../components";

const Hero: FC<{ isConnected: boolean }> = ({ isConnected }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: { xs: "100%", md: "50%" },
        height: "100%",
      }}
    >
      <TrailFromX
        isConnected={isConnected}
        itemStyle={{ marginBottom: "32px" }}
      >
        <Typography variant="h3">{t("hero.title")}</Typography>
        <Typography variant="body1">
          {t("hero.description")}
          <strong>{t("hero.tokenName")}</strong>
        </Typography>
        <ConnectButton />
      </TrailFromX>
    </Box>
  );
};

export default Hero;
