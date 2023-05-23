import React, { FC } from "react";
import { CarouselProject, GlassPaper } from "../../components";
import Copy from "./Copy";
import { projects } from "../../copy";
import { Box, Stack } from "@mui/material";
import theme from "../../config/theme";

const Projects: FC = () => {
  return (
    <GlassPaper sx={{ paddingBlock: theme.spacing(2) }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={4}>
          <Copy />
          <CarouselProject projects={projects} />
        </Stack>
      </Box>
    </GlassPaper>
  );
};

export default Projects;
