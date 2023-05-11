import React, { FC } from "react";
import { Illustration } from "@/components/atoms";
import { about } from "@/assets/copy";

const AboutIllustration: FC = () => {
  return (
    <Illustration
      altText={about.illustrationAltText}
      svgPath="/illustration/hello.svg"
    />
  );
};

export default AboutIllustration;
