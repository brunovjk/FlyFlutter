import React, { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CardBalanceButton } from "../../../components";
import { useAccount, useChainId } from "wagmi";
import { useMintFFC } from "../../../hooks";
import { ethers } from "ethers";

export interface MintProps {
  balances: BalancesProps;
  fetchOnlyPlayerBalances: () => void;
  setIsOpenAlert: React.Dispatch<React.SetStateAction<AppAlertProps>>;
}

const Mint: FC<MintProps> = ({
  balances,
  fetchOnlyPlayerBalances,
  setIsOpenAlert,
}) => {
  const { t } = useTranslation();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();

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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const mintTX = await useMintFFC({ player: address, chainId: chainId });
      if (mintTX.success) {
        fetchOnlyPlayerBalances();
        setIsOpenAlert({
          severity: "success",
          message: `${t("ffcmint.mintSuccess")} ${address}}`,
          isOpen: true,
        });
        setIsLoadingMint(false);
      } else {
        setIsOpenAlert({
          severity: "error",
          message: `${t("ffcmint.mintFailure")} ${mintTX.message}}`,
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
  }, [address, balances.player]);

  return (
    <CardBalanceButton
      label={t("ffcmint.balanceLabel")}
      value={balances.player}
      buttonText={t("ffcmint.mintButton")}
      tooltip={t("ffcmint.mintTooltip")}
      buttonDisabled={disabledMint}
      buttonLoading={isLoadingMint}
      handleClick={handleMint}
    />
  );
};

export default Mint;
