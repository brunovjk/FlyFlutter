import { readContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import BETTING_ABI from "../../contracts/Betting.json";
import { ethers } from "ethers";

const bettingAddress: any = addresses.bettingAddress;

export async function useBetFee(): Promise<{
  success: boolean;
  data: number | ethers.BigNumber | undefined;
  message: string;
}> {
  try {
    const data: any = await readContract({
      address: bettingAddress,
      abi: BETTING_ABI,
      functionName: "betFee",
    });

    return {
      success: true,
      data: data,
      message: "Bet Fee successful",
    };
  } catch (error: any) {
    console.error(error);
    return { success: false, data: undefined, message: error.message };
  }
}
