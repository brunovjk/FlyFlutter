import { ethers } from "ethers";
import { useState } from "react";

export function usePlayState() {
  let currentBetId: any;

  const [betFee, setBetFee] = useState<{
    useFee: number | ethers.BigNumber | undefined;
    showFee: string | undefined;
  }>({ useFee: undefined, showFee: undefined });

  const [disabledBet, setDisabledBet] = useState<boolean>(true);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [isOpenAlert, setIsOpenAlert] = useState<{
    type: "info" | "success" | "warning" | "error";
    message: string;
    isOpen: boolean;
  }>({
    type: "info",
    message: "Alert popup",
    isOpen: false,
  });
  const [isLoadingPlaceBet, setIsLoadingPlaceBet] = useState<boolean>(false);

  return {
    currentBetId,
    betFee,
    setBetFee,
    disabledBet,
    setDisabledBet,
    isOpenDialog,
    setIsOpenDialog,
    isOpenAlert,
    setIsOpenAlert,
    isLoadingPlaceBet,
    setIsLoadingPlaceBet,
  };
}
