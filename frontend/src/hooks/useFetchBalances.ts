import { useHouseTotalBetted } from "./flyflutter/useHouseTotalBetted";
import { useHouseTotalLost } from "./flyflutter/useHouseTotalLost";
import { useFFCBalance } from "./flyflutter/useFFCBalance";
import { useAllowanceBetting } from "./flyflutter/useAllowanceBetting";

import addresses from "../contracts/addresses.json";

export const usePlayerFetchBalances = async (
  address: any,
  updateBalances: any,
  chainId: number
) => {
  try {
    if (address != undefined) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: playerBalance } = await useFFCBalance({
        checkAddress: address,
        chainId,
      });
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: bettingAllowance } = await useAllowanceBetting({
        checkAddress: address,
        chainId,
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

export const useFetchBalances = async (
  address: any,
  updateBalances: any,
  chainId: number
) => {
  try {
    if (address != undefined) {
      const houseAddress =
        chainId === 137
          ? addresses.houseAddress_polygon
          : addresses.houseAddress_mumbai;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: playerBalance } = await useFFCBalance({
        checkAddress: address,
        chainId,
      });

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: bettingAllowance } = await useAllowanceBetting({
        checkAddress: address,
        chainId,
      });
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: houseBalance } = await useFFCBalance({
        checkAddress: houseAddress,
        chainId,
      });
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: totalBetted } = await useHouseTotalBetted(chainId);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: totalLost } = await useHouseTotalLost(chainId);

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
