import { readContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import HOUSE_ABI from "../../contracts/House.json";

const houseAddress: any = addresses.houseAddress;

export const useHouseTotalLost = async (): Promise<{
  success: boolean;
  data: string | undefined;
  message: string;
}> => {
  try {
    const data: any = await readContract({
      address: houseAddress,
      abi: HOUSE_ABI,
      functionName: "totalSent",
    });

    return {
      success: true,
      data: { data }.data.toString(),
      message: "House Total Betted successful",
    };
  } catch (error: any) {
    return { success: false, data: undefined, message: error.message };
  }
};
