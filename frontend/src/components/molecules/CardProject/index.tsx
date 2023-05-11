import React, { FC } from "react";
import { CustomPaper } from "@/components/atoms";
import CardContent from "./CardContent";

import { useConnectionSync } from "@/hooks";

export interface CardProjectProps {
  projectName: string;
  description: string;
  technologiesUsed: string;
  keyFeatures: string;
  role: string;
  challenges: string;
  learnMore: string;
  isDarkCard?: boolean;
}

const CardProject: FC<CardProjectProps> = ({
  projectName,
  description,
  technologiesUsed,
  keyFeatures,
  role,
  challenges,
  learnMore,
  isDarkCard,
}) => {
  const isConnected = useConnectionSync();

  const isDarkCardStyle = !isConnected
    ? {
        bgcolor: isDarkCard ? "text.primary" : "common.white",
      }
    : {};

  return (
    <CustomPaper
      sx={{
        ...isDarkCardStyle,
        padding: "24px",
        maxWidth: { xs: "100%", md: "360px" },
        border: isConnected ? "" : "2px solid",
      }}
    >
      <CardContent
        projectName={projectName}
        description={description}
        technologiesUsed={technologiesUsed}
        keyFeatures={keyFeatures}
        role={role}
        challenges={challenges}
        learnMore={learnMore}
        isDarkCard={isDarkCard}
      />
    </CustomPaper>
  );
};

export default CardProject;
