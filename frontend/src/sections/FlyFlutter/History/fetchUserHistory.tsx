import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useGetBetsPerPlayer } from "../../../hooks";
import { guessConverter } from "../../../helpers";
import { useTranslation } from "react-i18next";

interface UserHistoryProps {
  bets: BetProps[];
  isLoadingHistory: boolean;
}

export default function fetchUserHistory(): UserHistoryProps {
  const { address } = useAccount();
  const { t } = useTranslation();

  const [isLoadingHistory, setIsLoadingHistory] = useState<boolean>(true);
  const [bets, setBets] = useState<BetProps[]>([]);

  useEffect(() => {
    const _fetchUserHistory = async () => {
      if (address != undefined) {
        const betsByIDs = await useGetBetsPerPlayer(address, 100);

        if (betsByIDs.success && betsByIDs.data != undefined) {
          // Add a unique `id` key to each object in the `bets` array
          const betsWithId = betsByIDs.data.map((bet, index) => {
            const guess = guessConverter(bet.playerGuess, t);
            return { ...bet, id: index, guess };
          });

          setBets(betsWithId);
          setIsLoadingHistory(false);
        }
      }
    };
    _fetchUserHistory();
  }, [address]);

  return {
    bets,
    isLoadingHistory,
  };
}
