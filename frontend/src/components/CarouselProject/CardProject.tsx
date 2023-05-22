import React, { FC } from "react";
import CardContent from "./CardContent";
import GlassPaper from "../GlassPaper";

const CardProject: FC<CardProjectProps> = ({
  projectName,
  description,
  technologiesUsed,
  keyFeatures,
  learnMore,
}) => {
  return (
    <GlassPaper
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
    </GlassPaper>
  );
};

export default CardProject;
