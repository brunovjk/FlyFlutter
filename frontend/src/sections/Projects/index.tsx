import React, { FC } from "react";
import { CarouselProject, FadeInLayout, GlassPaper } from "../../components";
import Copy from "./Copy";
import { projects } from "../../copy";
import { Stack } from "@mui/material";

const Projects: FC = () => {
  return (
    <FadeInLayout>
      <GlassPaper>
        <Stack spacing={3} justifyContent="center">
          <Copy />
          <CarouselProject projects={projects} />
        </Stack>
      </GlassPaper>
    </FadeInLayout>
  );
};

export default Projects;
