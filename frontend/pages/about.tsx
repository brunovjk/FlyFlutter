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
    </>
  );
}

function Sections() {
  return (
    <>
      {/*  */}
      <ParallaxLayer offset={0} speed={0.3}>
        <AboutSection
          title={"Experience the thrill of gambling without risking a dime."}
          text={
            "FlyFlutter - Play Odd and Even Hand Game with Quantum Randomness and Smart Contracts Automation for Zero Gravity Decisions! It operates on the Polygon and Mumbai blockchains using our free to mint FlyFlutterCoin"
          }
          img={url("cloud")}
          altImg={"cloud"}
        />
      </ParallaxLayer>
      {/*  */}
      <ParallaxLayer offset={1} speed={0.3}>
        <AboutSection
          title={"Experimente la emoción de apostar sin arriesgar un centavo."}
          text={
            "FlyFlutter - ¡Juega al juego de Mano Impar y Par con Aleatoriedad Cuántica y Automatización de Contratos Inteligentes para Decisiones de Gravedad Cero! Opera en las blockchains de Polygon y Mumbai utilizando nuestro token gratis FlyFlutterCoin"
          }
          img={url("cloud")}
          altImg={"cloud"}
          left={true}
        />
      </ParallaxLayer>
      {/*  */}
      <ParallaxLayer offset={2} speed={0.3}>
        <AboutSection
          title={"在不冒任何风险的情况下体验投注的快感。"}
          text={
            "FlyFlutter - 使用量子随机性和智能合约自动化玩零重力决策的单双手游戏！ 它使用我们的免费铸币在 Polygon 和 Mumbai 区块链上运行 FlyFlutterCoin"
          }
          img={url("cloud")}
          altImg={"cloud"}
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

        <Sky />
        <Sections />

        <FadeInBox>
          <ScrollToTop parallax={parallax} />
        </FadeInBox>
      </Parallax>
    </Box>
  );
}
