import { watchContractEvent } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import BETTING_ABI from "../../contracts/Betting.json";

export const useWatchBettingEvent = async ({
  eventName,
  chainId,
}: {
  eventName: string;
  chainId: number;
}): Promise<{ node: any; label: any; owner: any }> => {
  return new Promise<{ node: any; label: any; owner: any }>(
    (resolve, reject) => {
      try {
        const bettingAddress: any =
          chainId === 137
            ? addresses.bettingAddress_polygon
            : addresses.bettingAddress_mumbai;
        watchContractEvent(
          {
            address: bettingAddress,
            abi: BETTING_ABI,
            eventName: eventName,
            once: true,
          },
          (_node, _label, _owner) => {
            resolve({
              node: _node,
              label: _label,
              owner: _owner,
            });
          }
        );
      } catch (error: any) {
        console.log(error);
        reject(error);
      }
    }
  );
};
