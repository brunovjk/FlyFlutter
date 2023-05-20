import { watchContractEvent } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import BETTING_ABI from "../../contracts/Betting.json";

const bettingAddress: any = addresses.bettingAddress;

export const useWatchBettingEvent = async ({
  eventName,
}: {
  eventName: string;
}): Promise<{ node: any; label: any; owner: any }> => {
  return new Promise<{ node: any; label: any; owner: any }>(
    (resolve, reject) => {
      try {
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
