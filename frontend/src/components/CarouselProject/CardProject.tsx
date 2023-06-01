import React, { FC, useEffect, useRef, useMemo } from "react";
import { useTheme } from "@mui/material";
import VanillaTilt from "vanilla-tilt";
import CardContent from "./CardContent";
import { GlassPaperNoBlur } from "../GlassPaper";

const CardProject: FC<CardProjectProps> = ({
  projectName,
  description,
  technologiesUsed,
  keyFeatures,
  learnMore,
  learnMoreLink,
}) => {
  const theme = useTheme();
  const tilt = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt.current, {
        gyroscope: false,
        max: 15,
        speed: 200,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);

  const cardContent = useMemo(
    () => (
      <CardContent
        projectName={projectName}
        description={description}
        technologiesUsed={technologiesUsed}
        keyFeatures={keyFeatures}
        learnMore={learnMore}
        learnMoreLink={learnMoreLink}
      />
    ),
    [
      projectName,
      description,
      technologiesUsed,
      keyFeatures,
      learnMore,
      learnMoreLink,
    ]
  );

  return (
    <GlassPaperNoBlur
      ref={tilt}
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
      {cardContent}
    </GlassPaperNoBlur>
  );
};

export default CardProject;
