import { readContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import BETTING_ABI from "../../contracts/Betting.json";

export const useGetBetsPerPlayer = async (
  address: string,
  endIndex: number,
  chainId: number
): Promise<{
  success: boolean;
  data?: BetProps[];
  message: string;
}> => {
  try {
    const bettingAddress: any =
      chainId === 137
        ? addresses.bettingAddress_polygon
        : addresses.bettingAddress_mumbai;

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
