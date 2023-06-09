import React from "react";
import { Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const Rules: React.FC = () => {
  const { t } = useTranslation();

  const rules: Array<{ title: string; copy: string }> = t("rules", {
    returnObjects: true,
  });

  const rulesMapping = rules.map((rule: { title: string; copy: string }) => (
    <Stack spacing={1} key={rule.title}>
      <Typography
        sx={{
          fontWeight: "medium",
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          textAlign: "left",
          letterSpacing: "0.063rem",
        }}
      >
        {rule.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: "regular",
          fontSize: { xs: "1rem", md: "1.125rem" },
          textAlign: "left",
        }}
      >
        {rule.copy}
      </Typography>
    </Stack>
  ));

  return (
    <Stack
      spacing={{ xs: 2, md: 4 }}
      sx={{
        position: "absolute",
        height: "98%",
        width: "100%",
        padding: "16px",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      {rulesMapping}
    </Stack>
  );
};

export default Rules;
