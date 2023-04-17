import { readContract } from "@wagmi/core";
import addresses from "../contracts/addresses.json";
import FFC_ABI from "../contracts/FlyFlutterCoin.json";
import { ethers } from "ethers";

const bettingAddress: any = addresses.bettingAddress;
const ffcAddress: any = addresses.ffcAddress;

export async function useAllowanceBetting({
  player,
}: {
  player: `0x${string}` | undefined;
}): Promise<{
  data: number | ethers.BigNumber | undefined;
}> {
  try {
    const data: any = await readContract({
      address: ffcAddress,
      abi: FFC_ABI,
      functionName: "allowance",
      args: [player, bettingAddress],
    });
    return { data: data };
  } catch (error: any) {
    console.error(error);
    return { data: undefined };
  }
}
