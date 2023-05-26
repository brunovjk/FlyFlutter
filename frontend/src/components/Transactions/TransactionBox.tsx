import React, { useEffect } from "react";
import { Box } from "@mui/material";
import {
  useSpring,
  useSpringRef,
  animated,
  SpringConfig,
} from "@react-spring/web";

interface TransactionBoxProps {
  controlStyle?: boolean;
  commonStyle?: React.CSSProperties;
  initialStyle?: React.CSSProperties;
  falseStyle?: React.CSSProperties;
  trueStyle?: React.CSSProperties;
  config?: SpringConfig;
  children: React.ReactNode;
}

const AnimatedBox = animated(Box);

const TransactionBox: React.FC<TransactionBoxProps> = ({
  controlStyle = true,
  commonStyle,
  initialStyle,
  falseStyle,
  trueStyle,
  config,
  children,
}) => {
  const api = useSpringRef();

  const springs = useSpring({
    ref: api,
    from: initialStyle,
    to: controlStyle ? trueStyle : falseStyle,
    config,
  });

  useEffect(() => {
    api.start();
  }, [api, controlStyle]);

  return (
    <AnimatedBox style={{ ...commonStyle, ...springs }}>{children}</AnimatedBox>
  );
};

export default TransactionBox;
