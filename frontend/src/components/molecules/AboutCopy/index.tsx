import React, { FC } from "react";
import { CustomTypography } from "@/components/atoms";
import { about } from "@/assets/copy";

const AboutCopy: FC = () => {
  return (
    <>
      <CustomTypography
        variant="h1"
        sx={{
          fontSize: { xs: "1.75rem", md: "3.5rem" },
          textAlign: "left",
          letterSpacing: { xs: "-1.4px", md: "-3px" },
          marginBottom: { xs: 2, md: "32px" },
        }}
      >
        {about.title}
      </CustomTypography>
      <CustomTypography
        variant="body1"
        sx={{
          fontSize: "1.125rem",
          textAlign: "left",
        }}
      >
        {about.body1} <br /> {about.body2} <br /> {about.body3}
      </CustomTypography>
    </>
  );
};

export default AboutCopy;
