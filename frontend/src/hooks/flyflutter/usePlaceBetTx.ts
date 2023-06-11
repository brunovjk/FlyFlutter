import { ethers } from "ethers";
import { prepareSendTransaction, sendTransaction } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import BETTING_ABI from "../../contracts/Betting.json";

export const usePlaceBetTx = async (
  {
    player,
    betFee,
    selectedHand,
    selectedGuess,
    selectedBetAmount,
  }: PlaceBetTxProps,
  chainId: number
): Promise<PlaceBetTxResult> => {
  try {
    const bettingAddress: any =
      chainId === 137
        ? addresses.bettingAddress_polygon
        : addresses.bettingAddress_mumbai;

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
