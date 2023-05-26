import React from "react";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardProject from "./CardProject";

const customTransition = "transform 1300ms ease-in-out";

const CarouselProject: React.FC<{ projects: CardProjectProps[] }> = ({
  projects,
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 3,
      partialVisibilityGutter: 48,
    },
    desktopfdsfs: {
      breakpoint: { max: 1599, min: 1200 },
      items: 3,
      partialVisibilityGutter: 32,
    },
    tablet: {
      breakpoint: { max: 1199, min: 900 },
      items: 2,
      partialVisibilityGutter: 32,
    },
    tabletdsa: {
      breakpoint: { max: 899, min: 600 },
      items: 2,
      partialVisibilityGutter: 24,
    },
    mobile: {
      breakpoint: { max: 599, min: 400 },
      items: 1,
      partialVisibilityGutter: 32,
    },
    smallMobile: {
      breakpoint: { max: 399, min: 0 },
      items: 1,
      partialVisibilityGutter: 24,
    },
  };

  return (
    <Box component="div" sx={{ width: "90vw" }}>
      <Carousel
        arrows={false}
        focusOnSelect={true}
        swipeable={true}
        draggable={true}
        partialVisible={true}
        responsive={responsive}
        customTransition={customTransition}
      >
        {projects.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselProject;
