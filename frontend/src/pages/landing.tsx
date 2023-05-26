import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Box, useMediaQuery } from "@mui/material";
import {
  ChasingAstronaut,
  Contact,
  FlyFlutter,
  Hero,
  Projects,
  Rocket,
  TalkingAstronauts,
} from "../sections";

import { FadeInBox, FadeInContainer, SectionContainer } from "../components";
import theme from "../config/theme";
import { useConnectionSync } from "../hooks";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

function Sky({ isConnected }: { isConnected: boolean }) {
  return (
    <>
      <FadeInBox>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4.5}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
      </FadeInBox>

      <ParallaxLayer offset={1.5} speed={-2} style={{ pointerEvents: "none" }}>
        <img
          src={url("satellite4")}
          style={{ width: "5%", marginLeft: "3%", transform: "scaleX(-1)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "55%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "15%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "70%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "40%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "10%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "60%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "25%", marginLeft: "30%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "80%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "5%", marginLeft: "5%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "15%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
      {/* Rocket */}
      <ParallaxLayer offset={0} speed={0.8}>
        <SectionContainer justifyContent="flex-end">
          <Rocket isConnected={isConnected} />
        </SectionContainer>
      </ParallaxLayer>
    </>
  );
}
function Sections({ isConnected }: { isConnected: boolean }) {
  const isExtraMall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* TalkingAstronauts */}
      <ParallaxLayer offset={0} speed={-0.3}>
        <SectionContainer justifyContent="flex-end">
          <TalkingAstronauts isConnected={isConnected} />
        </SectionContainer>
      </ParallaxLayer>
      {/* Hero */}
      <ParallaxLayer offset={0} speed={0.3}>
        <SectionContainer justifyContent="flex-start">
          <Hero isConnected={isConnected} />
        </SectionContainer>
      </ParallaxLayer>
      {/* FlyFlutter */}
      <ParallaxLayer
        offset={0}
        speed={0.3}
        factor={isExtraMall ? 2 : 1.5}
        style={{
          marginLeft: isConnected ? "0%" : "100%",
          transition: `margin 1.2s ${theme.transitions.easing.easeIn}`,
        }}
      >
        <SectionContainer>
          <FlyFlutter />
        </SectionContainer>
      </ParallaxLayer>
      {/* ChasingAstronauts */}
      <ParallaxLayer offset={2} speed={-0.3}>
        <SectionContainer justifyContent="flex-end">
          <ChasingAstronaut />
        </SectionContainer>
      </ParallaxLayer>
      {/* Projects */}
      <ParallaxLayer offset={1.5} speed={0}>
        <SectionContainer>
          <Projects />
        </SectionContainer>
      </ParallaxLayer>
      {/* ContactForm */}
      <ParallaxLayer offset={3} speed={0.3}>
        <SectionContainer justifyContent="flex-start">
          <Contact />
        </SectionContainer>
      </ParallaxLayer>
    </>
  );
}

export default function LandingPage() {
  const parallax = useRef<IParallax>(null!);
  const isConnected = useConnectionSync();

  return (
    <Box
      component="div"
      style={{
        minHeight: "100vh",
      }}
    >
      <Parallax ref={parallax} pages={4.5}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4.5}
          style={{
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light}`,
          }}
        />
        <Sky isConnected={isConnected} />
        <Sections isConnected={isConnected} />
      </Parallax>
    </Box>
  );
}
