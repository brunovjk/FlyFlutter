import React, { useEffect, useRef, ReactNode } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import VanillaTilt from "vanilla-tilt";
import theme from "../../config/theme";

interface GlassPaperCardProps {
  children: ReactNode | (() => ReactNode);
  keyword: string;
  sx?: object;
}

const StyleGlassPaper = styled(Paper)(({ keyword }: { keyword: string }) => ({
  color: theme.palette.secondary.light,

  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  zIndex: 1,

  boxShadow: "5px 5px 12px rgba(0,0,0,0.5)",
  borderRadius: "16px",
  borderTop: "1px solid rgba(255,255,255,0.5)",
  borderLeft: "1px solid rgba(255,255,255,0.5)",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(5px)",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    width: "50%",
    height: "100%",
    top: 0,
    left: 0,
    fontSize: "10em",
    background: "rgba(255,255,255,0.05)",
    pointerEvents: "none",
  },
  "& .keyword:before": {
    content: `'${keyword}'`,
    position: "absolute",
    top: "0px",
    left: "-125px",
    width: "100%",
    fontSize: "4em",
    textTransform: "uppercase",
    fontWeight: 500,
    letterSpacing: "2px",
    transform: "rotate(-90deg)",
    color: "rgba(0,0,0,0.2)",
  },
}));

const GlassPaperCard: React.FC<GlassPaperCardProps> = ({
  children,
  keyword,
  sx,
}) => {
  const options = {
    max: 15,
    speed: 200,
    glare: true,
    "max-glare": 0.3,
  };
  const tilt = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt.current, options);
    }
  }, [options]);

  return (
    <div>
      <StyleGlassPaper
        ref={tilt}
        sx={sx}
        className="glassmorphic-card"
        keyword={keyword}
      >
        <div className="keyword" />
        {typeof children === "function" ? children() : children}
      </StyleGlassPaper>
    </div>
  );
};

export default GlassPaperCard;
