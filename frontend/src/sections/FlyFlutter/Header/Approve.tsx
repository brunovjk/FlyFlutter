import React, { FC, useState, useEffect } from "react";

import { CardBalanceButton } from "../../../components";

import { useAccount } from "wagmi";
import { useApproveBetting } from "../../../hooks";
import { ethers } from "ethers";

export interface FFApproveProps {
  balances: BalancesProps;
  fetchOnlyPlayerBalances: () => void;
  setIsOpenAlert: React.Dispatch<React.SetStateAction<AppAlertProps>>;
}

const FFCApprove: FC<FFApproveProps> = ({
  balances,
  fetchOnlyPlayerBalances,
  setIsOpenAlert,
}) => {
  const { address, isConnected } = useAccount();

  const [disabledApprove, setDisabledApprove] = useState<boolean>(true);
  const [isLoadingApprove, setIsLoadingApprove] = useState<boolean>(false);

  const handleDisabledApprove = async (
    address?: `0x${string}`,
    userAllowance?: number | ethers.BigNumber,
    userBalance?: number | ethers.BigNumber
  ) => {
    if (address != undefined) {
      if (
        userAllowance != undefined &&
        userBalance != undefined &&
        ethers.BigNumber.from(userBalance).gt(userAllowance)
      ) {
        setDisabledApprove(false);
      } else {
        setDisabledApprove(true);
      }
    }
  };

  async function handleApprove() {
    setIsLoadingApprove(true);
    if (
      isConnected &&
      address != undefined &&
      !disabledApprove &&
      balances.player != undefined
    ) {
      const approveTX = await useApproveBetting({
        player: address,
        amount: balances.player,
      });
      if (approveTX.success) {
        fetchOnlyPlayerBalances();
        setIsOpenAlert({
          severity: "success",
          message: "Approved successful",
          isOpen: true,
        });
        setIsLoadingApprove(false);
      } else {
        setIsOpenAlert({
          severity: "error",
          message: `Failed to Approve, ${approveTX.message}`,
          isOpen: true,
        });
        setIsLoadingApprove(false);
      }
    }
  }

  useEffect(() => {
    if (address) {
      handleDisabledApprove(address, balances.allowance, balances.player);
    }
  }, [balances.allowance, balances.player]);

  return (
    <CardBalanceButton
      label="Allowance"
      value={balances.allowance}
      buttonText="Approve"
      tooltip="Approve Betting Contract: To place a bet, you need to approve the Betting contract to spend a certain amount of FFC on your behalf."
      buttonDisabled={disabledApprove}
      buttonLoading={isLoadingApprove}
      handleClick={handleApprove}
    />
  );
};

export default FFCApprove;
