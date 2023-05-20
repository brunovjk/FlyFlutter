import { prepareWriteContract, writeContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import BETTING_ABI from "../../contracts/Betting.json";

import { ethers } from "ethers";

// Users needs to approve `bettingAddress` to spend the `selectedBetAmount` FFC
// before place a bet
const bettingAddress: any = addresses.bettingAddress;

export const usePlaceBet = async ({
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
}): Promise<{ success: boolean; hash?: string; message: string }> => {
  try {
    const config = await prepareWriteContract({
      address: bettingAddress,
      abi: BETTING_ABI,
      functionName: "placeBet",
      args: [selectedHand, selectedGuess, selectedBetAmount],
      overrides: {
        from: player,
        value: betFee,
      },
    });
    const writeContractTx = await writeContract(config);
    // We need get the Bet.requestId from the `received`
    const received = await writeContractTx.wait();
    console.log("placeBet writeContractTx received:", received);

    if (received.status === 0) {
      return {
        success: false,
        hash: writeContractTx.hash,
        message: "Transaction failed",
      };
    }

    return {
      success: true,
      hash: writeContractTx.hash,
      message: "Transaction successful",
    };
  } catch (error: any) {
    console.log(error);
    return { success: false, hash: undefined, message: error.message };
  }
};
