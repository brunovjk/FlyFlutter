import React from "react";
import { SVGBox } from "../../components";

const Rocket: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <SVGBox svgPath="rocket.svg" svgAlt="Rocket" />
    </div>
  );
};

export default Rocket;
