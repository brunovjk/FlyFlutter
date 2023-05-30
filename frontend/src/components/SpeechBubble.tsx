import React from "react";
import { styled } from "@mui/material/styles";

const Bubble = styled("div")`
  position: relative;
  display: inline-block;
  font-family: "Press Start 2P", cursive;
  background-color: #fff;
  color: #000;
  border: 2px solid #371a45;
  padding: 12px;
  box-sizing: border-box;
  text-align: left;

  &::after {
    content: "";
    display: block;
    position: absolute;
    box-sizing: border-box;
  }

  &.mini {
    font-size: 1rem;
  }

  &.medium {
    font-size: 1.3rem;
  }

  &.large {
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  &.top::after {
    height: 4px;
    width: 4px;
    top: -8px;
    left: 32px;
    box-shadow: 0 -4px #000, 0 -8px #000, 0 -12px #000, 0 -16px #000,
      -4px -12px #000, -8px -8px #000, -12px -4px #000, -4px -4px #fff,
      -8px -4px #fff, -4px -8px #fff, -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
  }

  &.right::after {
    height: 4px;
    width: 4px;
    top: 84px;
    right: -8px;
    background: #fff;
    box-shadow: 4px -4px #fff, 4px 0 #fff, 8px 0 #fff, 0 -8px #fff, 4px 4px #000,
      8px 4px #000, 12px 4px #000, 16px 4px #000, 12px 0 #000, 8px -4px #000,
      4px -8px #000, 0 -4px #fff;
  }

  &.bottom::after {
    height: 4px;
    width: 4px;
    bottom: -8px;
    left: 32px;
    box-shadow: 0 4px #000, 0 8px #000, 0 12px #000, 0 16px #000, -4px 12px #000,
      -8px 8px #000, -12px 4px #000, -4px 4px #fff, -8px 4px #fff, -4px 8px #fff,
      -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
  }

  &.left::after {
    height: 4px;
    width: 4px;
    top: 20px;
    left: -8px;
    background: #fff;
    box-shadow: -4px -4px #fff, -4px 0 #fff, -8px 0 #fff, 0 -8px #fff,
      -4px 4px #000, -8px 4px #000, -12px 4px #000, -16px 4px #000, -12px 0 #000,
      -8px -4px #000, -4px -8px #000, 0 -4px #fff;
  }
`;
// font-family: monospace;

interface SpeechBubbleProps {
  side?: "top" | "right" | "bottom" | "left";
  size?: "mini" | "medium" | "large";
  children: React.ReactNode;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  side = "right",
  size = "medium",
  children,
}) => {
  const classes = ["bubble", side, size].join(" ");

  return <Bubble className={classes}>{children}</Bubble>;
};

export default SpeechBubble;
