import { useState } from "react";

export function useStates() {
  const [balances, setBalances] = useState<BalancesProps>({
    player: undefined,
    house: undefined,
    totalBetted: undefined,
    totalLost: undefined,
    allowance: undefined,
    betFee: undefined,
  });
  const [inputs, setInputs] = useState<InputsProps>({
    guess: undefined,
    hand: undefined,
    amount: undefined,
  });

  const [results, setResults] = useState<ResultsProps>({
    playerHand: undefined,
    playerGuess: undefined,
    requestId: undefined,
    taskId: undefined,
    betId: undefined,
    houseHand: undefined,
    winner: undefined,
  });

  const [enabledMint, setEnabledMint] = useState<boolean>(false);
  const [enabledApprove, setEnabledApprove] = useState<boolean>(false);

  const [enabledBet, setEnabledBet] = useState<boolean>(false);

  const [placingBet, setPlacingBet] = useState<boolean>(false);
  const [waitingBet, setWaitingBet] = useState<boolean>(false);

  const [openAlert, setOpenAlert] = useState<AppAlertProps>({
    severity: "info",
    message: "Alert popup",
    isOpen: false,
  });

  return {
    balances,
    inputs,
    results,
    enabledMint,
    enabledApprove,
    enabledBet,
    placingBet,
    waitingBet,
    openAlert,
    setBalances,
    setInputs,
    setResults,
    setEnabledMint,
    setEnabledApprove,
    setEnabledBet,
    setPlacingBet,
    setWaitingBet,
    setOpenAlert,
  };
}
