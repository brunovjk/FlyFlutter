import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Hero, Rocket } from "@/sections";
import {
  FadeInBox,
  Header,
  SVGBox,
  ScrollToTop,
  SectionContainer,
} from "@/components";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

function Sky() {
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

      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "55%" }}
        />
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "15%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "70%" }}
        />
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "40%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "10%" }}
        />
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "60%" }}
        />
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "25%", marginLeft: "30%" }}
        />
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "80%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "5%", marginLeft: "5%" }}
        />
        <Box
          component="img"
          src={url("cloud")}
          style={{ display: "block", width: "15%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
      {/* Rocket */}
      <ParallaxLayer offset={0} speed={0.8}>
        <SectionContainer justifyContent="flex-end">
          <Rocket isConnected={false} />
        </SectionContainer>
      </ParallaxLayer>
    </>
  );
}

export default function AboutPage() {
  const theme = useTheme();
  const parallax = useRef<IParallax>(null!);

  return (
    <Box
      component="div"
      style={{
        minHeight: "100vh",
      }}
    >
      <Parallax ref={parallax} pages={3}>
        <Header parallax={parallax} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light}`,
          }}
        />
        {/* Sky */}
        <Sky />
        {/* Hero */}
        <ParallaxLayer offset={0} speed={0.3}>
          <SectionContainer maxWidth="xl" justifyContent="flex-start">
            <Hero isConnected={false} />
          </SectionContainer>
        </ParallaxLayer>
        {/* Hero */}
        <ParallaxLayer offset={1} speed={0.3}>
          <SectionContainer maxWidth="xl" justifyContent="flex-start">
            <Hero isConnected={false} />
          </SectionContainer>
        </ParallaxLayer>
        {/* Hero */}
        <ParallaxLayer offset={2} speed={0.3}>
          <SectionContainer maxWidth="xl" justifyContent="flex-start">
            <Hero isConnected={false} />
          </SectionContainer>
        </ParallaxLayer>

        <FadeInBox>
          <ScrollToTop parallax={parallax} />
        </FadeInBox>
      </Parallax>
    </Box>
  );
}
