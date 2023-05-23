import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import theme from "../../config/theme";

const CardContent: FC<CardProjectProps> = ({
  projectName,
  description,
  technologiesUsed,
  keyFeatures,
  learnMore,
}) => {
  return (
    <Stack spacing="16px">
      <Typography
        gutterBottom
        sx={{
          fontWeight: "medium",
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          textAlign: "center",
          letterSpacing: "0.063rem",
        }}
      >
        {projectName}
      </Typography>
      <Typography
        sx={{
          fontWeight: "regular",
          fontSize: { xs: "1rem", md: "1.125rem" },
          textAlign: "center",
        }}
      >
        {description}
      </Typography>

      <Typography
        sx={{
          fontWeight: "light",
          fontSize: { xs: "0.875rem", md: "1rem" },
          textAlign: "center",
        }}
      >
        {technologiesUsed}
      </Typography>
      {keyFeatures && (
        <Typography
          sx={{
            fontWeight: "regular",
            fontSize: { xs: "0.875rem", md: "1rem" },
            textAlign: "center",
          }}
        >
          {keyFeatures}
        </Typography>
      )}
      <LoadingButton
        variant="text"
        sx={{ color: theme.palette.secondary.main }}
      >
        {learnMore}
      </LoadingButton>
    </Stack>
  );
};

export default CardContent;
