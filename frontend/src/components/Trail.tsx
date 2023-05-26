import React, { ReactNode } from "react";
import { useTrail, a } from "@react-spring/web";

const Trail: React.FC<{ children: ReactNode }> = ({ children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    x: 0,
    from: { x: 800 },
  });
  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </div>
  );
};
export default Trail;
