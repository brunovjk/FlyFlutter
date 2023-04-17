import addresses from "../contracts/addresses.json";
import BETTING_ABI from "../contracts/Betting.json";

import { ethers } from "ethers";
import { prepareSendTransaction, sendTransaction } from "@wagmi/core";

const bettingAddress: any = addresses.bettingAddress;

export const usePlaceBetTx = async ({
  player,
  betFee,
  selectedHand,
  selectedGuess,
  selectedBetAmount,
}: {
  player: `0x${string}` | undefined;
  betFee: number | ethers.BigNumber | undefined;
  selectedHand: number;
  selectedGuess: number;
  selectedBetAmount: number;
}): Promise<{ success: boolean; hash?: `0x${string}`; message: string }> => {
  try {
    const config = await prepareSendTransaction({
      request: {
        to: bettingAddress,
        from: player,
        value: betFee,
        data: new ethers.utils.Interface(BETTING_ABI).encodeFunctionData(
          "placeBet",
          [selectedHand, selectedGuess, selectedBetAmount]
        ),
      },
    });

    const writeContractTx = await sendTransaction(config);

    return {
      success: true,
      hash: writeContractTx.hash,
      message: "Place Bet successful",
    };
  } catch (error: any) {
    return { success: false, hash: undefined, message: error.message };
  }
};
