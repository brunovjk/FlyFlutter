import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
  ChasingAstronaut,
  Contact,
  FlyFlutter,
  Hero,
  Projects,
  Rocket,
  TalkingAstronauts,
} from "../sections";

import {
  FadeInBox,
  Header,
  SVGBox,
  ScrollToTop,
  SectionContainer,
} from "../components";

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

      <ParallaxLayer
        offset={3.7}
        speed={-0.3}
        style={{ pointerEvents: "none" }}
      >
        <SVGBox
          svgPath="/img/studying_astronauts.svg"
          svgAlt="Studying Astronaut"
          styles={{ width: "2%", opacity: 0.75, marginLeft: "5%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.5}
        speed={-2.5}
        style={{ pointerEvents: "none" }}
      >
        <SVGBox
          svgPath="/img/ballons_astronauts.svg"
          svgAlt="Ballons Astronaut"
          styles={{
            width: "8%",
            opacity: 0.75,
            transform: "scaleX(-1)",
            marginLeft: "-3%",
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.25}
        speed={0.25}
        style={{ pointerEvents: "none" }}
      >
        <SVGBox
          svgPath="/img/plain_astronauts.svg"
          svgAlt="Plainning Astronaut"
          styles={{
            opacity: 0.75,
            width: "10%",
            marginLeft: "90%",
            transform: "rotate(35deg)",
          }}
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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const parallaxFactor: number = isSmallScreen ? 2 : isMediumScreen ? 1.6 : 1.2;

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
        <SectionContainer maxWidth="xl" justifyContent="flex-start">
          <Hero isConnected={isConnected} />
        </SectionContainer>
      </ParallaxLayer>
      {/* FlyFlutter */}
      <ParallaxLayer
        offset={0}
        speed={0.3}
        factor={parallaxFactor}
        style={{
          marginLeft: isConnected ? "0%" : "100%",
          transition: "margin 1.9s ease-out",
        }}
      >
        <SectionContainer>
          <FlyFlutter />
        </SectionContainer>
      </ParallaxLayer>
      {/* ChasingAstronauts */}
      <ParallaxLayer offset={3} speed={-0.1}>
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

export default function HomePage() {
  const theme = useTheme();
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
        <FadeInBox>
          <Header parallax={parallax} />
        </FadeInBox>

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

        <FadeInBox>
          <ScrollToTop parallax={parallax} />
        </FadeInBox>
      </Parallax>
    </Box>
  );
}
