import React, { useState, useEffect } from "react";
import { useAccount, useChainId } from "wagmi";
import { useGetBetsPerPlayer } from "../../../hooks";
import { guessConverter } from "../../../helpers";
import { useTranslation } from "react-i18next";

interface UserHistoryProps {
  bets: BetProps[];
  isLoadingHistory: boolean;
}

export default function FetchUserHistory(): UserHistoryProps {
  const { address } = useAccount();
  const { t } = useTranslation();
  const chainId = useChainId();

  const [isLoadingHistory, setIsLoadingHistory] = useState<boolean>(true);
  const [bets, setBets] = useState<BetProps[]>([]);

  useEffect(() => {
    const _fetchUserHistory = async () => {
      if (address != undefined) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const betsByIDs = await useGetBetsPerPlayer(address, 100, chainId);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return {
    bets,
    isLoadingHistory,
  };
}
