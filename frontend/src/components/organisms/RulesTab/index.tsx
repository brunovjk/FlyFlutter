import React from "react";
import { Stack } from "@mui/material";
import { CustomTypography } from "@/components/atoms";
import { rules } from "@/assets/copy";

const RulesTab: React.FC = () => {
  const rulesMapping = rules.map((rule) => (
    <Stack spacing="8px" key={rule.title}>
      <CustomTypography
        sx={{
          fontWeight: "medium",
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          textAlign: "left",
          letterSpacing: "0.063rem",
        }}
      >
        {rule.title}
      </CustomTypography>
      <CustomTypography
        sx={{
          fontWeight: "regular",
          fontSize: { xs: "1rem", md: "1.125rem" },
          textAlign: "left",
        }}
      >
        {rule.copy}
      </CustomTypography>
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

export default RulesTab;
