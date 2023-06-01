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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: playerBalance } = await useFFCBalance({
        checkAddress: address,
      });
      // eslint-disable-next-line react-hooks/rules-of-hooks
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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: playerBalance } = await useFFCBalance({
        checkAddress: address,
      });

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: bettingAllowance } = await useAllowanceBetting({
        checkAddress: address,
      });
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: houseBalance } = await useFFCBalance({
        checkAddress: houseAddress,
      });
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: totalBetted } = await useHouseTotalBetted();
      // eslint-disable-next-line react-hooks/rules-of-hooks
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
