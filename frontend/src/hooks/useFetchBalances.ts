import {
  useHouseTotalBetted,
  useHouseTotalLost,
  useFFCBalance,
  useAllowanceBetting,
} from "@/hooks";
import addresses from "@/contracts/addresses.json";

const houseAddress: string = addresses.houseAddress;

export const usePlayerFetchBalances = async (
  address: any,
  updateBalances: any
) => {
  try {
    if (address != undefined) {
      const playerBalanceTx: any = await useFFCBalance({
        checkAddress: address,
      });
      const bettingAllowanceTX: any = await useAllowanceBetting({
        checkAddress: address,
      });

      updateBalances({
        player: playerBalanceTx.data || undefined,
        allowance: bettingAllowanceTX.data || undefined,
      });
    }
  } catch (error: any) {
    console.error(error);
  }
};

export const useFetchBalances = async (address: any, updateBalances: any) => {
  try {
    if (address != undefined) {
      const playerBalanceTx: any = await useFFCBalance({
        checkAddress: address,
      });
      const bettingAllowanceTX: any = await useAllowanceBetting({
        checkAddress: address,
      });

      const houseBalanceTx: any = await useFFCBalance({
        checkAddress: houseAddress,
      });
      const totalBettedTx: any = await useHouseTotalBetted();
      const totalLostTx: any = await useHouseTotalLost();

      updateBalances({
        player: playerBalanceTx.data || undefined,
        allowance: bettingAllowanceTX.data || undefined,
        house: houseBalanceTx.data || undefined,
        totalBetted: totalBettedTx.data || undefined,
        totalLost: totalLostTx.data || undefined,
      });
    }
  } catch (error: any) {
    console.error(error);
  }
};
