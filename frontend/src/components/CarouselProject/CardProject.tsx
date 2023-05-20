import React, { FC } from "react";
import Paper from "@mui/material/Paper";
import CardContent from "./CardContent";

const CardProject: FC<CardProjectProps> = ({
  projectName,
  description,
  technologiesUsed,
  keyFeatures,
  learnMore,
}) => {
  return (
    <Paper
      sx={{
        padding: "24px",
        margin: "12px",
        maxWidth: { xs: "100%", md: "324px" },
      }}
    >
      <CardContent
        projectName={projectName}
        description={description}
        technologiesUsed={technologiesUsed}
        keyFeatures={keyFeatures}
        learnMore={learnMore}
      />
    </Paper>
  );
};

export default CardProject;
