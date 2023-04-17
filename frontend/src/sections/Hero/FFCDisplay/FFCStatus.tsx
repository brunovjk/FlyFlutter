import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import addresses from "../../../contracts/addresses.json";
import { useFFCBalance } from "@/web3hooks/useFFCBalance";
import { useHouseTotalBetted } from "@/web3hooks/useHouseTotalBetted";
import { useHouseTotalLost } from "@/web3hooks/useHouseTotalLost";
import Button from "@/components/Button";
import Skeleton from "@/components/Skeleton";
import { useMintFFC } from "@/web3hooks/useMintFFC";

const houseAddress: string = addresses.houseAddress;

const FFCStatus = ({
  balances,
  handleBalances,
}: {
  balances: any;
  handleBalances: any;
}) => {
  const { address, isConnected } = useAccount();
  const [disableMint, setDisableMint] = useState<boolean>(true);

  async function handleMint() {
    if (isConnected && address != undefined) {
      const mintTX = await useMintFFC({ player: address });
      if (mintTX.success) {
        console.log("Minted 100 to: ", address);
      } else {
        console.log("Failed to Mint, please try again");
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
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

          handleBalances({
            player: playerBalanceTx.data || undefined,
            house: houseBalanceTx.data || undefined,
            totalBetted: totalBettedTx.data || undefined,
            totalLost: totalLostTx.data || undefined,
          });
        }
      } catch (error: any) {
        console.error(error);
      }
    };

    if (address) {
      fetchData();
      setDisableMint(false);
    }
  }, [address]);

  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
      <div className="w-full flex items-center">
        <div className="w-full flex flex-col items-center">
          <span className="text-center font-light text-sm md:text-base mb-1">
            Your balance
          </span>
          <span className="w-full text-center font-medium text-xl md:text-2xl">
            {balances.player ? balances.player : <Skeleton />}
          </span>
        </div>
        <Button disabled={disableMint} text="Mint" onClick={handleMint} />
      </div>
      <div className="w-full flex items-center">
        <div className="w-full flex flex-col items-right">
          <span className="font-light text-sm md:text-base text-right">
            House Balance
          </span>
          <span className="font-light text-sm md:text-base text-right">
            Total betted
          </span>
          <span className="font-light text-sm md:text-base text-right">
            Total Lost
          </span>
        </div>

        <div className="w-full flex flex-col items-left">
          <span className="font-medium text-xl md:text-2xl ">
            {balances.house ? balances.house : <Skeleton />}
          </span>
          <span className="font-medium text-xl md:text-2xl ">
            {balances.totalBetted ? balances.totalBetted : <Skeleton />}
          </span>
          <span className="font-medium text-xl md:text-2xl ">
            {balances.totalLost ? balances.totalLost : <Skeleton />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FFCStatus;
