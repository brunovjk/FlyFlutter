import React, { FC } from "react";
import {
  CarouselProject,
  GlassPaperLargeShadow,
  TrailFromX,
} from "../../components";
import Copy from "./Copy";
import { projects } from "../../copy";
import { Box } from "@mui/material";
import theme from "../../config/theme";
import { animated, useInView, useSpring } from "@react-spring/web";

const Projects: FC = () => {
  const [ref, isInView] = useInView({});

  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isInView ? 1 : 0,
    },

    config: { duration: 600, tension: 180, friction: 20 },
  });

  return (
    <animated.div style={styles}>
      <GlassPaperLargeShadow
        sx={{
          paddingBlock: theme.spacing(2),
        }}
      >
        <Box
          ref={ref}
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TrailFromX isConnected={!isInView} fromRight={true} delay={600}>
            <Copy />
            <CarouselProject projects={projects} />
          </TrailFromX>
        </Box>
      </GlassPaperLargeShadow>
    </animated.div>
  );
};

export default Projects;
