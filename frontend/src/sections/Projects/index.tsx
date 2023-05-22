import React, { FC } from "react";
import { CarouselProject, FadeInLayout, GlassPaper } from "../../components";
import Copy from "./Copy";
import { projects } from "../../copy";
import { Box, Stack } from "@mui/material";

const Projects: FC = () => {
  return (
    <FadeInLayout>
      <GlassPaper>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack spacing={4} justifyContent="center">
            <Copy />
            <CarouselProject projects={projects} />
          </Stack>
        </Box>
      </GlassPaper>
    </FadeInLayout>
  );
};

export default Projects;
