import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Box, useTheme } from "@mui/material";
import {
  FadeInBox,
  Header,
  AboutSection,
  ScrollToTop,
  SectionContainer,
} from "@/components";
import { useTranslation } from "react-i18next";

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
          factor={6}
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

      <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.1 }}>
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
      <ParallaxLayer offset={3.75} speed={0.5} style={{ opacity: 0.1 }}>
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
      <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
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
      <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
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
      <ParallaxLayer offset={4.6} speed={0.4} style={{ opacity: 0.6 }}>
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

      <ParallaxLayer offset={5.6} speed={0.4} style={{ opacity: 0.6 }}>
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
    </>
  );
}

function Sections() {
  const { t } = useTranslation();

  return (
    <>
      {/* About Dev and Project */}
      <ParallaxLayer offset={0} speed={0.3}>
        <AboutSection
          title={t("aboutPage.developer.title")}
          text={[
            t("aboutPage.developer.text.0"),
            t("aboutPage.developer.text.1"),
          ]}
          altImg={t("aboutPage.developer.altImg")}
          img="/img/web_developer_showcase.svg"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3}>
        <AboutSection
          title={t("aboutPage.technologies.title")}
          text={[
            t("aboutPage.technologies.text.0"),
            t("aboutPage.technologies.text.1"),
            t("aboutPage.technologies.text.2"),
          ]}
          img="/img/main_technologies_utilized.svg"
          altImg={t("aboutPage.technologies.altImg")}
          left={true}
        />
      </ParallaxLayer>

      {/* About Front-End Development */}
      <ParallaxLayer offset={2} speed={0.3}>
        <AboutSection
          title={t("aboutPage.front.title")}
          text={[
            t("aboutPage.front.text.0"),
            t("aboutPage.front.text.1"),
            t("aboutPage.front.text.2"),
          ]}
          img="/img/front_end_development_excellence.svg"
          altImg={t("aboutPage.front.altImg")}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.3}>
        <AboutSection
          title={t("aboutPage.animation.title")}
          text={[
            t("aboutPage.animation.text.0"),
            t("aboutPage.animation.text.1"),
            t("aboutPage.animation.text.2"),
          ]}
          img="/img/animation_and_transitions.svg"
          altImg={t("aboutPage.animation.altImg")}
          left={true}
        />
      </ParallaxLayer>

      {/* About Smart Contracts Development */}
      <ParallaxLayer offset={4} speed={0.3}>
        <AboutSection
          title={t("aboutPage.contracts.title")}
          text={[
            t("aboutPage.contracts.text.0"),
            t("aboutPage.contracts.text.1"),
            t("aboutPage.contracts.text.2"),
            t("aboutPage.contracts.text.3"),
          ]}
          img="/img/smart_contracts.svg"
          altImg={t("aboutPage.contracts.altImg")}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.3}>
        <AboutSection
          title={t("aboutPage.betting.title")}
          text={[
            t("aboutPage.betting.text.0"),
            t("aboutPage.betting.text.1"),
            t("aboutPage.betting.text.2"),
            t("aboutPage.betting.text.3"),
            t("aboutPage.betting.text.4"),
            t("aboutPage.betting.text.5"),
          ]}
          img="/img/the_betting_cycle.svg"
          altImg={t("aboutPage.betting.altImg")}
          left={true}
        />
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
      <Parallax ref={parallax} pages={6}>
        <Header parallax={parallax} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={6}
          style={{
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light}`,
          }}
        />

        <Sky />
        <Sections />

        <FadeInBox>
          <ScrollToTop parallax={parallax} />
        </FadeInBox>
      </Parallax>
    </Box>
  );
}
