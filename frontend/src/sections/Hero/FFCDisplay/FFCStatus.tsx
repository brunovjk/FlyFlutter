import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import addresses from "../../../contracts/addresses.json";
import { useFFCBalance } from "@/web3hooks/useFFCBalance";
import Button from "@/components/Button";
import Skeleton from "@/components/Skeleton";
import { useMintFFC } from "@/web3hooks/useMintFFC";
import Alert from "@/components/Alert";
import { fetchBalances } from "../fetchBalances";

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
  const [isLoadingMint, setIsLoadingMint] = useState<boolean>(false);
  const [isOpenAlert, setIsOpenAlert] = useState<{
    type: "info" | "success" | "warning" | "error";
    message: string;
    isOpen: boolean;
  }>({
    type: "info",
    message: "Alert popup",
    isOpen: false,
  });
  async function handleMint() {
    setIsLoadingMint(true);
    if (isConnected && address != undefined) {
      const mintTX = await useMintFFC({ player: address });
      if (mintTX.success) {
        console.log("Minted 100 to: ", address);
        setIsOpenAlert({
          type: "success",
          message: `Minted 100 to: ${address}`,
          isOpen: true,
        });
        setIsLoadingMint(false);
      } else {
        console.log("Failed to Mint, please try again");
        setIsOpenAlert({
          type: "error",
          message: "Failed to Mint, please try again",
          isOpen: true,
        });
        setIsLoadingMint(false);
      }
    }
  }

  useEffect(() => {
    const handleDisableMint = async (address: any) => {
      if (address != undefined) {
        const playerBalanceTx: any = await useFFCBalance({
          checkAddress: address,
        });
        if (playerBalanceTx.data != undefined && playerBalanceTx.data <= 10) {
          setDisableMint(false);
        }
      }
    };
    if (address) {
      fetchBalances(address, handleBalances);
      handleDisableMint(address);
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
        <Button
          disabled={disableMint}
          isLoading={isLoadingMint}
          text="Mint"
          onClick={handleMint}
        />
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
      <Alert
        type={isOpenAlert.type}
        message={isOpenAlert.message}
        isOpen={isOpenAlert.isOpen}
        setIsOpen={setIsOpenAlert}
      />
    </div>
  );
};

export default FFCStatus;
