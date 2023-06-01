import React, { createContext, FC, ReactNode, useEffect } from "react";
import { AppAlert } from "../../../components";
import { useAccount } from "wagmi";
import { useStates } from "./states";
import { useFunctions } from "./functions";

const FlyFlutterContext = createContext<FlyFlutterContextProps>(
  {} as FlyFlutterContextProps
);

const FlyFlutterContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { address } = useAccount();
  const {
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
  } = useStates();

  const {
    updateBalances,
    updateInputs,
    updateResults,
    FetchBalances,
    FetchOnlyPlayerBalances,
  } = useFunctions({ setBalances, setInputs, setResults });

  useEffect(() => {
    FetchBalances();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const contextValues: FlyFlutterContextProps = {
    balances,
    inputs,
    results,
    enabledMint,
    enabledApprove,
    enabledBet,
    placingBet,
    waitingBet,
    openAlert,
    updateBalances,
    updateInputs,
    updateResults,
    setEnabledMint,
    setEnabledApprove,
    setEnabledBet,
    setPlacingBet,
    setWaitingBet,
    setOpenAlert,
    FetchOnlyPlayerBalances,
    FetchBalances,
  };

  return (
    <FlyFlutterContext.Provider value={contextValues}>
      {children}
      <AppAlert openAlert={openAlert} setOpenAlert={setOpenAlert} />
    </FlyFlutterContext.Provider>
  );
};

export { FlyFlutterContext, FlyFlutterContextProvider };
