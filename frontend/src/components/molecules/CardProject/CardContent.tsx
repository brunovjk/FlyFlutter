import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import { CustomTypography, CustomButton } from "@/components/atoms";
import { CardProjectProps } from ".";

const CardContent: FC<CardProjectProps> = ({
  projectName,
  description,
  technologiesUsed,
  keyFeatures,
  role,
  challenges,
  learnMore,
  isDarkCard,
}) => {
  return (
    <Stack spacing="16px">
      <Stack spacing="8px">
        <CustomTypography
          sx={{
            fontWeight: "medium",
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            textAlign: "left",
            letterSpacing: "0.063rem",
          }}
        >
          {projectName}
        </CustomTypography>
        <CustomTypography
          sx={{
            fontWeight: "regular",
            fontSize: { xs: "1rem", md: "1.125rem" },
            textAlign: "left",
          }}
        >
          {description}
        </CustomTypography>
      </Stack>

      <CustomTypography
        sx={{
          fontWeight: "light",
          fontSize: { xs: "0.875rem", md: "1rem" },
          textAlign: "left",
        }}
      >
        {technologiesUsed}
      </CustomTypography>
      <CustomTypography
        sx={{
          fontWeight: "regular",
          fontSize: { xs: "0.875rem", md: "1rem" },
          textAlign: "left",
        }}
      >
        {keyFeatures}
      </CustomTypography>
      <CustomTypography
        sx={{
          fontWeight: "regular",
          fontSize: { xs: "0.875rem", md: "1rem" },
          textAlign: "left",
        }}
      >
        {role}
      </CustomTypography>
      <Stack spacing="32px">
        <CustomTypography
          sx={{
            fontWeight: "regular",
            fontSize: { xs: "0.875rem", md: "1rem" },
            textAlign: "left",
          }}
        >
          {challenges}
        </CustomTypography>
        <CustomButton variant="outlined">{learnMore}</CustomButton>
      </Stack>
    </Stack>
  );
};

export default CardContent;
