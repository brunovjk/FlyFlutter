import { readContract } from "@wagmi/core";
import addresses from "../contracts/addresses.json";
import BETTING_ABI from "../contracts/Betting.json";
import { ethers } from "ethers";

const bettingAddress: any = addresses.bettingAddress;

export async function useBetFee(): Promise<{
  fee: number | ethers.BigNumber | undefined;
}> {
  try {
    const data: any = await readContract({
      address: bettingAddress,
      abi: BETTING_ABI,
      functionName: "betFee",
    });

    return { fee: data };
  } catch (error: any) {
    console.error(error);
    return { fee: undefined };
  }
}
