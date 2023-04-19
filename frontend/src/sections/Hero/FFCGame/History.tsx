import CircularLoading from "@/components/CircularLoading";
import { shortenBytes } from "@/utils/shorten";
import { useGetBetsPerPlayer } from "@/web3hooks/useGetBetsPerPlayer";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";

export default function History() {
  const { address } = useAccount();

  const [isLoadingHistory, setIsLoadingHistory] = useState<boolean>(true);
  const [bets, setBets] = useState<Bet[]>([]);
  const [endIndex, setEndIndex] = useState<number>(5);

  const fetchUserHistory = async () => {
    if (address != undefined) {
      const betsByIDs = await useGetBetsPerPlayer(address, endIndex);

      if (betsByIDs.success && betsByIDs.data != undefined) {
        setBets(betsByIDs.data);
        setIsLoadingHistory(false);
      }
    }
  };

  useEffect(() => {
    fetchUserHistory();
  }, [address, endIndex]);

  const handleLoadMore = async () => {
    setEndIndex(endIndex + 5);
  };

  return (
    <div>
      {isLoadingHistory ? (
        <CircularLoading />
      ) : (
        <>
          {bets.map((bet) => (
            <div key={bet.requestId}>
              BetID: {shortenBytes(bet.requestId)}, Amount: {bet.betAmount},
              Winner: {bet.winner}
            </div>
          ))}
          <button onClick={handleLoadMore}>Load More</button>
        </>
      )}
    </div>
  );
}
