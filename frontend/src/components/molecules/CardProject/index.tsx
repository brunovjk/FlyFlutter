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
}

const CardProject: FC<CardProjectProps> = ({
  projectName,
  description,
  technologiesUsed,
  keyFeatures,
  role,
  challenges,
  learnMore,
}) => {
  const isConnected = useConnectionSync();

  return (
    <CustomPaper
      sx={{
        padding: "24px",
        margin: "12px",
        maxWidth: { xs: "100%", md: "324px" },
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
      />
    </CustomPaper>
  );
};

export default CardProject;
