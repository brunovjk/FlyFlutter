import { prepareWriteContract, writeContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import BETTING_ABI from "../../contracts/Betting.json";
import { ethers } from "ethers";

export const usePlaceBet = async ({
  player,
  betFee,
  selectedHand,
  selectedGuess,
  selectedBetAmount,
  chainId,
}: {
  player: `0x${string}` | undefined;
  betFee: number | ethers.BigNumber | undefined;
  selectedHand: number;
  selectedGuess: number;
  selectedBetAmount: number;
  chainId: number;
}): Promise<{ success: boolean; hash?: string; message: string }> => {
  try {
    const bettingAddress: any =
      chainId === 137
        ? addresses.bettingAddress_polygon
        : addresses.bettingAddress_mumbai;

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
