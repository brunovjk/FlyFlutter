import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Box } from "@mui/material";
import {
  ChasingAstronaut,
  Contact,
  FlyFlutter,
  Hero,
  Projects,
  Rocket,
  TalkingAstronauts,
} from "../sections";

import { FadeInBox, FadeInContainer } from "../components";
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
          factor={3}
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
          style={{ display: "block", width: "20%", marginLeft: "5%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "15%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.7}
        speed={-0.4}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <img src={url("earth")} style={{ width: "40%" }} />
      </ParallaxLayer>
      {/* Rocket */}
      <ParallaxLayer offset={0} speed={0.8}>
        <FadeInContainer justifyContent="flex-end">
          <Rocket isConnected={isConnected} />
        </FadeInContainer>
      </ParallaxLayer>
    </>
  );
}
function Sections({
  isConnected,
  setIsConnected,
}: {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {/* TalkingAstronauts */}
      <ParallaxLayer offset={0} speed={-0.3}>
        <FadeInContainer justifyContent="flex-end">
          <TalkingAstronauts isConnected={isConnected} />
        </FadeInContainer>
      </ParallaxLayer>
      {/* Hero */}
      <ParallaxLayer
        offset={0}
        speed={0.3}
        onClick={() => {
          setIsConnected(!isConnected);
        }}
        style={{
          marginLeft: isConnected ? "-100%" : "0%",
          transition: `margin 0.9s ${theme.transitions.easing.easeIn}`,
        }}
      >
        <FadeInContainer justifyContent="flex-start">
          <Hero />
        </FadeInContainer>
      </ParallaxLayer>
      {/* FlyFlutter */}
      <ParallaxLayer
        offset={0}
        speed={0.3}
        onClick={() => {
          setIsConnected(!isConnected);
        }}
        style={{
          marginLeft: isConnected ? "0%" : "100%",
          transition: `margin 1.2s ${theme.transitions.easing.easeIn}`,
        }}
      >
        <FadeInContainer>
          <FlyFlutter />
        </FadeInContainer>
      </ParallaxLayer>
      {/* ChasingAstronauts */}
      <ParallaxLayer offset={2} speed={-0.3}>
        <FadeInContainer justifyContent="flex-end">
          <ChasingAstronaut />
        </FadeInContainer>
      </ParallaxLayer>
      {/* Projects */}
      <ParallaxLayer offset={1} speed={0}>
        <FadeInContainer>
          <Projects />
        </FadeInContainer>
      </ParallaxLayer>
      {/* ContactForm */}
      <ParallaxLayer offset={2} speed={0.3}>
        <FadeInContainer justifyContent="flex-start">
          <Contact />
        </FadeInContainer>
      </ParallaxLayer>
    </>
  );
}

export default function LandingPage() {
  const parallax = useRef<IParallax>(null!);
  const [isConnected, setIsConnected] = useState(false);
  // const isConnected = useConnectionSync();

  return (
    <Box
      component="div"
      style={{
        height: "100vh",
      }}
    >
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.light}`,
          }}
        />
        <Sky isConnected={isConnected} />
        <Sections isConnected={isConnected} setIsConnected={setIsConnected} />
      </Parallax>
    </Box>
  );
}
