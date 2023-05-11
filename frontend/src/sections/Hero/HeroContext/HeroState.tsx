import { useState } from "react";

export function useHeroState() {
  const [balances, setBalances] = useState<BalancesProps>({
    player: undefined,
    house: undefined,
    totalBetted: undefined,
    totalLost: undefined,
    allowance: undefined,
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

  const [waitingBet, setWaitingBet] = useState<boolean>(false);

  const [isOpenAlert, setIsOpenAlert] = useState<AppAlertProps>({
    severity: "info",
    message: "Alert popup",
    isOpen: false,
  });

  return {
    balances,
    setBalances,
    inputs,
    setInputs,
    results,
    setResults,
    waitingBet,
    setWaitingBet,
    isOpenAlert,
    setIsOpenAlert,
  };
}
