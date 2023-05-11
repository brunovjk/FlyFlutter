import React, { FC, createContext, ReactNode, useEffect } from "react";
import { AppAlert } from "@/components/molecules";

import { useAccount } from "wagmi";

import { useHeroState } from "./HeroState";
import { useHeroFunctions } from "./HeroFunctions";

type HeroContextProps = {
  children: ReactNode;
};

export const HeroContext = createContext({});

export const HeroContextProvider: FC<HeroContextProps> = ({ children }) => {
  const { address } = useAccount();

  const state = useHeroState();
  const functions = useHeroFunctions(state);

  const {
    balances,
    inputs,
    results,
    waitingBet,
    setWaitingBet,
    isOpenAlert,
    setIsOpenAlert,
  } = state;
  const {
    updateInputs,
    updateResults,
    fetchOnlyPlayerBalances,
    fetchBalances,
    handleAlertClose,
  } = functions;

  useEffect(() => {
    fetchBalances();
  }, [address]);

  return (
    <HeroContext.Provider
      value={{
        balances,
        inputs,
        results,
        waitingBet,
        isOpenAlert,
        setIsOpenAlert,
        setWaitingBet,
        updateInputs,
        updateResults,
        fetchOnlyPlayerBalances,
        fetchBalances,
      }}
    >
      <>
        {children}
        <AppAlert
          isOpen={isOpenAlert.isOpen}
          severity={isOpenAlert.severity}
          message={isOpenAlert.message}
          handleClose={handleAlertClose}
        />
      </>
    </HeroContext.Provider>
  );
};
