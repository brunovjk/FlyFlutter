import { readContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import BETTING_ABI from "../../contracts/Betting.json";
import { ethers } from "ethers";

export async function useBetFee(chainId: number): Promise<{
  success: boolean;
  data: number | ethers.BigNumber | undefined;
  message: string;
}> {
  try {
    const bettingAddress: any =
      chainId === 137
        ? addresses.bettingAddress_polygon
        : addresses.bettingAddress_mumbai;

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
