import React, { FC, useState, useEffect } from "react";

import { CardBalanceButton } from "../../../components";

import { useAccount } from "wagmi";
import { useMintFFC } from "../../../hooks";
import { ethers } from "ethers";

export interface FFCMintProps {
  balances: BalancesProps;
  fetchOnlyPlayerBalances: () => void;
  setIsOpenAlert: React.Dispatch<React.SetStateAction<AppAlertProps>>;
}

const FFCMint: FC<FFCMintProps> = ({
  balances,
  fetchOnlyPlayerBalances,
  setIsOpenAlert,
}) => {
  const { address, isConnected } = useAccount();

  const [disabledMint, setDisabledMint] = useState<boolean>(true);

  const [isLoadingMint, setIsLoadingMint] = useState<boolean>(false);

  const handleDisabledMint = async (
    address?: `0x${string}`,
    userBalance?: number | ethers.BigNumber
  ) => {
    const minToMint: number = 10;
    if (address != undefined) {
      if (
        userBalance != undefined &&
        ethers.BigNumber.from(userBalance).lt(minToMint)
      ) {
        setDisabledMint(false);
      } else {
        setDisabledMint(true);
      }
    }
  };

  async function handleMint() {
    setIsLoadingMint(true);
    if (isConnected && address != undefined && !disabledMint) {
      const mintTX = await useMintFFC({ player: address });
      if (mintTX.success) {
        fetchOnlyPlayerBalances();
        setIsOpenAlert({
          severity: "success",
          message: `Minted 100 FFC to: ${address}`,
          isOpen: true,
        });
        setIsLoadingMint(false);
      } else {
        setIsOpenAlert({
          severity: "error",
          message: `Failed to Mint, ${mintTX.message}`,
          isOpen: true,
        });
        setIsLoadingMint(false);
      }
    }
  }

  useEffect(() => {
    if (address) {
      handleDisabledMint(address, balances.player);
    }
  }, [balances.player]);

  return (
    <CardBalanceButton
      label="Balance"
      value={balances.player}
      buttonText="Mint"
      tooltip="FLyFlutterCoin Minting Rules: You can mint just 100 FlyFlutterCoins at a time, but only if your wallet balance is less than 10 FFC."
      buttonDisabled={disabledMint}
      buttonLoading={isLoadingMint}
      handleClick={handleMint}
    />
  );
};

export default FFCMint;
