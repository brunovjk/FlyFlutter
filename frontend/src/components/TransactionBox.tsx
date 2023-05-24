import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useSpring, useSpringRef, animated } from "@react-spring/web";

interface TransactionBoxProps {
  controlStyle: boolean;
  commonStyle?: React.CSSProperties;
  initialStyle: React.CSSProperties;
  falseStyle: React.CSSProperties;
  trueStyle: React.CSSProperties;
  children: React.ReactNode;
}

const AnimatedBox = animated(Box);

const TransactionBox: React.FC<TransactionBoxProps> = ({
  controlStyle,
  commonStyle,
  initialStyle,
  falseStyle,
  trueStyle,
  children,
}) => {
  const api = useSpringRef();
  const springs = useSpring({
    ref: api,
    from: initialStyle,
    config: {
      duration: 1900,
    },
  });

  useEffect(() => {
    api.start({
      to: controlStyle ? trueStyle : falseStyle,
    });
  }, [controlStyle]);

  return (
    <AnimatedBox style={{ ...commonStyle, ...springs }}>{children}</AnimatedBox>
  );
};

export default TransactionBox;
