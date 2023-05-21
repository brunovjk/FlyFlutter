import { useHouseTotalBetted } from "./flyflutter/useHouseTotalBetted";
import { useHouseTotalLost } from "./flyflutter/useHouseTotalLost";
import { useFFCBalance } from "./flyflutter/useFFCBalance";
import { useAllowanceBetting } from "./flyflutter/useAllowanceBetting";

import addresses from "../contracts/addresses.json";

const houseAddress: string = addresses.houseAddress;

export const usePlayerFetchBalances = async (
  address: any,
  updateBalances: any
) => {
  try {
    if (address != undefined) {
      const { data: playerBalance } = await useFFCBalance({
        checkAddress: address,
      });
      const { data: bettingAllowance } = await useAllowanceBetting({
        checkAddress: address,
      });

      updateBalances({
        player: playerBalance,
        allowance: bettingAllowance,
      });
    }
  } catch (error: any) {
    console.error(error);
  }
};

export const useFetchBalances = async (address: any, updateBalances: any) => {
  try {
    if (address != undefined) {
      const { data: playerBalance } = await useFFCBalance({
        checkAddress: address,
      });
      const { data: bettingAllowance } = await useAllowanceBetting({
        checkAddress: address,
      });

      const { data: houseBalance } = await useFFCBalance({
        checkAddress: houseAddress,
      });
      const { data: totalBetted } = await useHouseTotalBetted();
      const { data: totalLost } = await useHouseTotalLost();

      updateBalances({
        player: playerBalance,
        allowance: bettingAllowance,
        house: houseBalance,
        totalBetted: totalBetted,
        totalLost: totalLost,
      });
    }
  } catch (error: any) {
    console.error(error);
  }
};
