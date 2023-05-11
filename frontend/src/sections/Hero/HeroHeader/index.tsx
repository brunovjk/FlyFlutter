import React, { FC, useContext } from "react";
import { HeroContext } from "../HeroContext";

import { HeaderAnimation, FFCCopy, FFCLogo } from "@/components/molecules";
import { ConnectButton, FFCApprove, FFCMint } from "@/components/organisms";

const HeroHeader: FC = () => {
  const { balances, fetchOnlyPlayerBalances, setIsOpenAlert } =
    useContext(HeroContext);

  return (
    <HeaderAnimation
      FFCLogo={FFCLogo}
      FFCCopy={FFCCopy}
      FFCMint={FFCMint}
      FFCApprove={FFCApprove}
      ConnectButton={ConnectButton}
      balances={balances}
      fetchOnlyPlayerBalances={fetchOnlyPlayerBalances}
      setIsOpenAlert={setIsOpenAlert}
    />
  );
};

export default HeroHeader;
