import React from "react";
import { SVGBox } from "../../components";

const ChasingAstronaut: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <SVGBox svgPath="public\chasing_astronauts.svg" />
    </div>
  );
};

export default ChasingAstronaut;
