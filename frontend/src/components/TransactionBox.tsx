import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useSpring, useSpringRef, animated } from "@react-spring/web";

interface TransactionBoxProps {
  isConnected: boolean;
  commonStyle?: React.CSSProperties;
  initialStyle: React.CSSProperties;
  defaultStyle: React.CSSProperties;
  connectedStyle: React.CSSProperties;
  children: React.ReactNode;
}

const AnimatedBox = animated(Box);

const TransactionBox: React.FC<TransactionBoxProps> = ({
  isConnected,
  commonStyle,
  initialStyle,
  defaultStyle,
  connectedStyle,
  children,
}) => {
  const api = useSpringRef();
  const springs = useSpring({
    ref: api,
    from: initialStyle,
    config: {
      duration: 1500,
      delay: 1000,
    },
  });

  useEffect(() => {
    api.start({
      to: isConnected ? connectedStyle : defaultStyle,
    });
  }, [isConnected]);

  return (
    <AnimatedBox style={{ ...commonStyle, ...springs }}>{children}</AnimatedBox>
  );
};

export default TransactionBox;
