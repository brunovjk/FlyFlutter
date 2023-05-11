import { readContract } from "@wagmi/core";
import addresses from "@/contracts/addresses.json";
import BETTING_ABI from "@/contracts/Betting.json";

const bettingAddress: any = addresses.bettingAddress;

export const useGetBetsPerPlayer = async (
  address: string,
  endIndex: number
): Promise<{
  success: boolean;
  data?: Bet[];
  message: string;
}> => {
  try {
    const data: any = await readContract({
      address: bettingAddress,
      abi: BETTING_ABI,
      functionName: "getBetsPerPlayer",
      args: [address, endIndex],
    });
    return {
      success: true,
      data: data,
      message: "Get Bets Per Player successful",
    };
  } catch (error: any) {
    return { success: false, data: undefined, message: error.message };
  }
};
