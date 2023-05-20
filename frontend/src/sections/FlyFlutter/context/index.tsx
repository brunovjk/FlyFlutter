import React, { FC, createContext, ReactNode, useEffect } from "react";
import { AppAlert } from "../../../components";

import { useAccount } from "wagmi";

import { useStates } from "./states";
import { useFunctions } from "./functions";

type FlyFlutterContextProviderProps = {
  children: ReactNode;
};

const states = useStates();
const functions = useFunctions(states);

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
  setEnabledMint,
  setEnabledApprove,
  setEnabledBet,
  setPlacingBet,
  setWaitingBet,
  setOpenAlert,
} = states;
const {
  updateBalances,
  updateInputs,
  updateResults,
  fetchOnlyPlayerBalances,
  fetchBalances,
} = functions;

export const FlyFlutterContext = createContext<FlyFlutterContextProps>({
  balances: balances,
  inputs: inputs,
  results: results,
  enabledMint: enabledMint,
  enabledApprove: enabledApprove,
  enabledBet: enabledBet,
  placingBet: placingBet,
  waitingBet: waitingBet,
  openAlert: openAlert,
  setEnabledMint: setEnabledMint,
  setEnabledApprove: setEnabledApprove,
  setEnabledBet: setEnabledBet,
  setPlacingBet: setPlacingBet,
  setWaitingBet: setWaitingBet,
  setOpenAlert: setOpenAlert,
  updateBalances: updateBalances,
  updateInputs: updateInputs,
  updateResults: updateResults,
  fetchOnlyPlayerBalances: fetchOnlyPlayerBalances,
  fetchBalances: fetchBalances,
});

export const FlyFlutterContextProvider: FC<FlyFlutterContextProviderProps> = ({
  children,
}) => {
  const { address } = useAccount();

  useEffect(() => {
    fetchBalances();
  }, [address]);

  return (
    <FlyFlutterContext.Provider
      value={{
        balances: balances,
        inputs: inputs,
        results: results,
        enabledMint: enabledMint,
        enabledApprove: enabledApprove,
        enabledBet: enabledBet,
        placingBet: placingBet,
        waitingBet: waitingBet,
        openAlert: openAlert,
        setEnabledMint: setEnabledMint,
        setEnabledApprove: setEnabledApprove,
        setEnabledBet: setEnabledBet,
        setPlacingBet: setPlacingBet,
        setWaitingBet: setWaitingBet,
        setOpenAlert: setOpenAlert,
        updateBalances: updateBalances,
        updateInputs: updateInputs,
        updateResults: updateResults,
        fetchOnlyPlayerBalances: fetchOnlyPlayerBalances,
        fetchBalances: fetchBalances,
      }}
    >
      <>
        {children}
        <AppAlert
          isOpen={openAlert.isOpen}
          severity={openAlert.severity}
          message={openAlert.message}
        />
      </>
    </FlyFlutterContext.Provider>
  );
};
