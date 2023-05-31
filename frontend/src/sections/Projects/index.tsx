import React, { FC } from "react";
import {
  CarouselProject,
  GlassPaperLargeShadow,
  TrailFromX,
} from "../../components";
import Copy from "./Copy";
import { Box, useTheme } from "@mui/material";
import { animated, useInView, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";

const Projects: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [ref, isInView] = useInView({});

  const projects: Array<{
    projectName: string;
    description: string;
    technologiesUsed: string;
    keyFeatures: string;
    learnMore: string;
    learnMoreLink: string;
  }> = t("projects", { returnObjects: true });

  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isInView ? 1 : 0,
    },

    config: { duration: 600 },
  });

  return (
    <animated.div style={styles}>
      <GlassPaperLargeShadow>
        <Box
          ref={ref}
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TrailFromX
            isConnected={!isInView}
            fromRight={true}
            delay={600}
            itemStyle={{ marginTop: "32px" }}
          >
            <Copy />
            <CarouselProject projects={projects} />
          </TrailFromX>
        </Box>
      </GlassPaperLargeShadow>
    </animated.div>
  );
};

export default Projects;
