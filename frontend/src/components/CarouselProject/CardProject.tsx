import React, { FC, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import CardContent from "./CardContent";
import { GlassPaperNoBlur } from "../GlassPaper";
import theme from "../../config/theme";

const CardProject: FC<CardProjectProps> = ({
  projectName,
  description,
  technologiesUsed,
  keyFeatures,
  learnMore,
}) => {
  const options = {
    gyroscope: false,
    max: 15,
    speed: 200,
    glare: true,
    "max-glare": 0.2,
  };
  const tilt = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt.current, options);
    }
  }, [options]);
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
      <CardContent
        projectName={projectName}
        description={description}
        technologiesUsed={technologiesUsed}
        keyFeatures={keyFeatures}
        learnMore={learnMore}
      />
    </GlassPaperNoBlur>
  );
};

export default CardProject;
