import { readContract } from "@wagmi/core";
import addresses from "../contracts/addresses.json";
import BETTING_ABI from "../contracts/Betting.json";
import { ethers } from "ethers";

const bettingAddress: any = addresses.bettingAddress;

export async function useBetFee(): Promise<{
  success: boolean;
  data:
    | {
        useFee: number | ethers.BigNumber | undefined;
        showFee: string | undefined;
      }
    | undefined;
  message: string;
}> {
  try {
    const data: any = await readContract({
      address: bettingAddress,
      abi: BETTING_ABI,
      functionName: "betFee",
    });

    const useFee = data;
    const showFee = ethers.utils.formatUnits(data.toString());

    return {
      success: true,
      data: { useFee: useFee, showFee: showFee },
      message: "Bet Fee successful",
    };
  } catch (error: any) {
    console.error(error);
    return { success: false, data: undefined, message: error.message };
  }
}
