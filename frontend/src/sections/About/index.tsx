import React, { FC } from "react";
import { SectionLayout } from "@/components/atoms";
import { AboutCopy, AboutIllustration } from "@/components/molecules";
import { useIsUpScreen } from "@/hooks";

const About: FC = () => {
  const isMediumScreen = useIsUpScreen("md");

  return (
    <SectionLayout
      content1={<AboutCopy />}
      content2={isMediumScreen ? <AboutIllustration /> : null}
    />
  );
};

export default About;
