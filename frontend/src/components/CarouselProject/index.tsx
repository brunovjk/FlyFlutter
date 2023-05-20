import React from "react";
import { Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardProject from "./CardProject";

const customTransition = "transform 1300ms ease-in-out";

const CarouselProject: React.FC<{ projects: CardProjectProps[] }> = ({
  projects,
}) => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <Carousel
        ssr={true}
        // css={{ overflow: "visible", paddingBottom: "32px" }}
        arrows={false}
        focusOnSelect={true}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        customTransition={customTransition}
      >
        {projects.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselProject;
