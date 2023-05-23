import React, { FC } from "react";
import CardContent from "./CardContent";
import GlassPaperCard from "../GlassPaper/GlassPaperCard";
import theme from "../../config/theme";

const CardProject: FC<CardProjectProps> = ({
  projectName,
  description,
  technologiesUsed,
  keyFeatures,
  learnMore,
  keyword,
}) => {
  return (
    <GlassPaperCard
      keyword={keyword}
      sx={{
        padding: {
          xs: theme.spacing(1),
          md: theme.spacing(2),
          lg: theme.spacing(4),
        },
        margin: {
          xs: theme.spacing(1),
          md: theme.spacing(2),
          lg: theme.spacing(4),
        },
      }}
    >
      <CardContent
        projectName={projectName}
        description={description}
        technologiesUsed={technologiesUsed}
        keyFeatures={keyFeatures}
        learnMore={learnMore}
        keyword={keyword}
      />
    </GlassPaperCard>
  );
};

export default CardProject;
