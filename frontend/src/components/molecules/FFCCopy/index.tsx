import React, { FC } from "react";

import { CustomTypography } from "@/components/atoms";

const FFCCopy: FC = () => {
  return (
    <>
      <CustomTypography
        variant="body1"
        sx={{
          fontWeight: "bold",
          fontSize: "1.125rem",
          textAlign: "center",
          fontStyle: "italic",
          paddingBottom: 2,
        }}
      >
        Experience the thrill of gambling without risking a dime.
      </CustomTypography>
      <CustomTypography
        variant="body1"
        sx={{
          fontWeight: "light",
          fontSize: "1.125rem",
          textAlign: "center",
        }}
      >
        FlyFlutter is a game designed to provide entertainment for the ones who
        enjoy the thrill of gambling but without using real money. It operates
        on the Polygon and Mumbai blockchains using the free to mint
        <strong> FlyFlutterCoin </strong>token.
      </CustomTypography>
    </>
  );
};

export default FFCCopy;
