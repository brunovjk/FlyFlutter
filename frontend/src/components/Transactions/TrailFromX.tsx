import React, { ReactNode } from "react";
import { useTrail, a, SpringConfig } from "@react-spring/web";
import { Box, SxProps, Theme } from "@mui/material";

const TrailFromX: React.FC<{
  itemStyle?: React.CSSProperties;
  fromRight?: boolean;
  delay?: number;
  isConnected?: boolean;
  children: ReactNode;
  sx?: SxProps<Theme>;
  config?: SpringConfig;
}> = ({
  itemStyle,
  fromRight,
  delay,
  isConnected = false,
  children,
  config,
  sx,
}) => {
  const sizeMult: number = fromRight ? 1 : -1;
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    delay,
    config,
    opacity: 1,
    x: isConnected ? 4800 * sizeMult : 0,
    from: { opacity: 0, x: 4800 * sizeMult },
  });
  return (
    <Box component="div" sx={sx}>
      {trail.map(({ ...style }, index) => (
        <a.div
          key={index}
          style={{
            ...style,
            ...itemStyle,
          }}
        >
          {items[index]}
        </a.div>
      ))}
    </Box>
  );
};
export default TrailFromX;
