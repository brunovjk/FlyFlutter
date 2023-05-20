import React from "react";
import { SVGBox } from "../../components";

const TalkingAstronaut: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <SVGBox svgPath="public\talking_astronauts.svg" />
    </div>
  );
};

export default TalkingAstronaut;
