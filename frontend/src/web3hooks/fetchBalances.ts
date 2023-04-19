import { useHouseTotalBetted } from "@/web3hooks/useHouseTotalBetted";
import { useHouseTotalLost } from "@/web3hooks/useHouseTotalLost";
import { useFFCBalance } from "@/web3hooks/useFFCBalance";
import { useAllowanceBetting } from "@/web3hooks/useAllowanceBetting";

import addresses from "../contracts/addresses.json";

const houseAddress: string = addresses.houseAddress;

export const fetchBalances = async (address: any, handleBalances: any) => {
  try {
    if (address != undefined) {
      const playerBalanceTx: any = await useFFCBalance({
        checkAddress: address,
      });
      const houseBalanceTx: any = await useFFCBalance({
        checkAddress: houseAddress,
      });
      const totalBettedTx: any = await useHouseTotalBetted();
      const totalLostTx: any = await useHouseTotalLost();
      const bettingAllowanceTX: any = await useAllowanceBetting({
        player: address,
      });

      handleBalances({
        player: playerBalanceTx.data || undefined,
        house: houseBalanceTx.data || undefined,
        totalBetted: totalBettedTx.data || undefined,
        totalLost: totalLostTx.data || undefined,
        allowance: bettingAllowanceTX.data || undefined,
      });
    }
  } catch (error: any) {
    console.error(error);
  }
};
