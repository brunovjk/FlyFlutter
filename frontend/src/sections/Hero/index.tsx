import React, { useState } from "react";
import FFCEvents from "./FFCEvents";
import FFCDisplay from "./FFCDisplay";
import FFCGame from "./FFCGame";
import FFCHeader from "./FFCHeader";
import { ethers } from "ethers";

const Hero = () => {
  const [requestId, setRequestId] = useState<string | undefined>(undefined);
  const [taskId, setTaskId] = useState<string | undefined>(undefined);
  const [betId, setBetId] = useState<string | undefined>(undefined);
  const [houseHand, setHouseHand] = useState<string | undefined>(undefined);
  const [winner, setWinner] = useState<string | undefined>(undefined);

  const [balances, setBalances] = useState<{
    player: string | undefined;
    house: string | undefined;
    totalBetted: string | undefined;
    totalLost: string | undefined;
    allowance: number | ethers.BigNumber | undefined;
  }>({
    player: undefined,
    house: undefined,
    totalBetted: undefined,
    totalLost: undefined,
    allowance: undefined,
  });

  const [waitingBet, setWaitingBet] = useState<boolean>(false);

  function handleBalances(newBalances: any) {
    setBalances({ ...balances, ...newBalances });
  }

  return (
    <div className="w-full min-h-screen grid grid-rows-10 md:grid-rows-6 gap-4 bg-blue-100 px-4 pt-12 md:px-12 md:pt-24">
      <div className="row-span-1">
        <FFCHeader />
      </div>

      <div className="row-span-8 md:row-span-4 grid md:flex items-center justify-evenly">
        <FFCGame
          balances={balances}
          handleBalances={handleBalances}
          setRequestId={setRequestId}
          setTaskId={setTaskId}
          setBetId={setBetId}
          setHouseHand={setHouseHand}
          setWinner={setWinner}
          setWaitingBet={setWaitingBet}
        />
        <FFCDisplay balances={balances} handleBalances={handleBalances} />
      </div>

      <div className="row-span-1">
        {waitingBet && (
          <FFCEvents
            requestId={requestId}
            taskId={taskId}
            betId={betId}
            houseHand={houseHand}
            winner={winner}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
