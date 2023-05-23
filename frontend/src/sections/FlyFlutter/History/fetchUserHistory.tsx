import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useGetBetsPerPlayer } from "../../../hooks";
import { guessConverter } from "../../../helpers";

interface UserHistoryProps {
  bets: BetProps[];
  isLoadingHistory: boolean;
}

export default function FetchUserHistory(): UserHistoryProps {
  const { address } = useAccount();

  const [isLoadingHistory, setIsLoadingHistory] = useState<boolean>(true);
  const [bets, setBets] = useState<BetProps[]>([]);

  useEffect(() => {
    const fetchUserHistory = async () => {
      if (address != undefined) {
        const betsByIDs = await useGetBetsPerPlayer(address, 100);

        if (betsByIDs.success && betsByIDs.data != undefined) {
          // Add a unique `id` key to each object in the `bets` array
          const betsWithId = betsByIDs.data.map((bet, index) => {
            const guess = guessConverter(bet.playerGuess);
            return { ...bet, id: index, guess };
          });

          setBets(betsWithId);
          setIsLoadingHistory(false);
        }
      }
    };
    fetchUserHistory();
  }, [address]);

  return {
    bets,
    isLoadingHistory,
  };
}
