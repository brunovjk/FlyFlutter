import React, { FC } from "react";

import { HeroAnimation } from "@/components/molecules";
import { HeroTab } from "@/components/organisms";

import { HeroContextProvider } from "./HeroContext";
import HeroHeader from "./HeroHeader";
import HeroDisplay from "./HeroDisplay";

const Hero: FC = () => {
  return (
    <HeroContextProvider>
      <HeroAnimation
        HeroHeader={HeroHeader}
        HeroDisplay={HeroDisplay}
        HeroTab={HeroTab}
      />
    </HeroContextProvider>
  );
};

export default Hero;
