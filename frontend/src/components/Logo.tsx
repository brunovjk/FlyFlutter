import React from "react";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const isSmallScreen = window.innerWidth <= 768;

  const text = isSmallScreen ? "VJK" : "brunovjk";

  return (
    <div className="font-bold text-3xl sm:text-4xl leading-9 ">{text}</div>
  );
};

export default Logo;
