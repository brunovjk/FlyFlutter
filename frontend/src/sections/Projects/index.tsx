import React, { FC } from "react";
import { SectionLayout } from "@/components/atoms";
import { CarouselProject } from "@/components/molecules";
import { projects } from "@/assets/copy";

const Projects: FC = () => {
  return <SectionLayout content1={<CarouselProject projects={projects} />} />;
};

export default Projects;
