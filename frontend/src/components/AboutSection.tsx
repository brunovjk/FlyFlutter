import { FadeInContainer, SVGBox, TrailFromX } from "@/components";
import { Box, Typography, Stack } from "@mui/material";
import React, { FC, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface AboutSectionProps {
  title: string;
  text: string;
  img: string;
  altImg: string;
  left?: boolean;
}

const AboutSection: FC<AboutSectionProps> = ({
  title,
  text,
  img,
  altImg,
  left,
}) => {
  const tilt = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt.current, {
        gyroscope: false,
        max: 15,
        speed: 200,
      });
    }
  }, []);

  return (
    <FadeInContainer justifyContent="space-between">
      <Box sx={{ width: { xs: "100%", sm: "50%" } }} order={left ? 1 : 0}>
        <TrailFromX itemStyle={{ padding: "16px" }} fromRight={left}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{text}</Typography>
        </TrailFromX>
      </Box>

      <Box
        ref={tilt}
        sx={{ width: { xs: "100%", sm: "40%" } }}
        order={left ? 0 : 1}
      >
        <SVGBox svgPath={img} svgAlt={altImg} />
      </Box>
    </FadeInContainer>
  );
};

export default AboutSection;
