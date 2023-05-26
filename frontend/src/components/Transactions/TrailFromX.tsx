import React, { ReactNode } from "react";
import { useTrail, a, easings } from "@react-spring/web";

const TrailFromX: React.FC<{
  itemStyle?: React.CSSProperties;
  fromRight?: boolean;
  delay?: number;
  isConnected: boolean;
  children: ReactNode;
}> = ({ itemStyle, fromRight, delay, isConnected, children }) => {
  const sizeMult: number = fromRight ? 1 : -1;
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    delay: delay,

    opacity: 1,
    x: isConnected ? 4800 * sizeMult : 0,
    from: { opacity: 0, x: 4800 * sizeMult },
  });
  return (
    <div>
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
    </div>
  );
};
export default TrailFromX;
