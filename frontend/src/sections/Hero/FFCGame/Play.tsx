import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";

import { ethers } from "ethers";
import { id } from "ethers/lib/utils.js";

import Dialog from "@/components/Dialog";
import SwitchSelector from "@/components/SwitchSelector";
import SliderSelector from "@/components/SliderSelector";
import AmountSelector from "@/components/AmountSelector";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

import { useBetFee } from "@/web3hooks/useBetFee";
import { usePlaceBetTxPermit } from "@/web3hooks/usePlaceBetTxPermit";
import { usePlaceBetTx } from "@/web3hooks/usePlaceBetTx";
import { useHashExplorer, useBetIdExplorer } from "@/web3hooks/useExplorer";
import { useWatchBettingEvent } from "@/web3hooks/useWatchBettingEvent";
import { useWaitForTransaction } from "@/web3hooks/useWaitForTransaction";
import { useAllowanceBetting } from "@/web3hooks/useAllowanceBetting";
import { useApproveBetting } from "@/web3hooks/useApproveBetting";
import Alert from "@/components/Alert";
import { fetchBalances } from "../fetchBalances";

export default function Play({
  balances,
  handleBalances,
  setRequestId,
  setTaskId,
  setBetId,
  setHouseHand,
  setWinner,
  setWaitingBet,
}: {
  balances: any;
  handleBalances: any;
  setRequestId: any;
  setTaskId: any;
  setBetId: any;
  setHouseHand: any;
  setWinner: any;
  setWaitingBet: any;
}) {
  let currentBetId: any;
  const { address, isConnected } = useAccount();

  const [aproveOrPermit, setAproveOrPermit] = useState<string>("Approve");

  const [selectedHand, setSelectedHand] = useState<number>(99);
  const [selectedGuess, setSelectedGuess] = useState<number>(99);
  const [selectedBetAmount, setSelectedBetAmount] = useState<number>(0);

  const [betFee, setBetFee] = useState<{
    useFee: number | ethers.BigNumber | undefined;
    showFee: string | undefined;
  }>({ useFee: undefined, showFee: undefined });

  const [amountToApprove, setAmountToApprove] = useState<number>(0);

  const [disabledBet, setDisabledBet] = useState<boolean>(true);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [isOpenAlert, setIsOpenAlert] = useState<{
    type: "info" | "success" | "warning" | "error";
    message: string;
    isOpen: boolean;
  }>({
    type: "info",
    message: "Alert popup",
    isOpen: false,
  });
  const [isLoadingApprove, setIsLoadingApprove] = useState<boolean>(false);
  const [isLoadingPlaceBet, setIsLoadingPlaceBet] = useState<boolean>(false);

  async function handleResetStates() {
    setTimeout(() => {
      setRequestId(undefined);
      setTaskId(undefined);
      setBetId(undefined);
      setHouseHand(undefined);
      setWinner(undefined);
      setWaitingBet(undefined);
      setSelectedHand(99);
      setSelectedGuess(99);
      setSelectedBetAmount(0);
      setAproveOrPermit("Approve");
      setAmountToApprove(0);
      setDisabledBet(true);
      setIsOpenDialog(false);
      setIsLoadingApprove(false);
      setIsLoadingPlaceBet(false);
    }, 2000);
  }

  async function handleSetWinner(TaskExecutedEvent: any) {
    if (
      TaskExecutedEvent.owner.topics[0] ===
        id("TaskExecuted(bytes32,string)") &&
      TaskExecutedEvent.owner.topics[1] === currentBetId
    ) {
      if (TaskExecutedEvent.owner.topics[2] === id("Player wins")) {
        console.log("Task Executed, Winner: ", "Player wins");
        setWinner("Player wins");
      } else if (TaskExecutedEvent.owner.topics[2] === id("House wins")) {
        console.log("Task Executed, Winner: ", "House wins");
        setWinner("House wins");
      }
    } else {
      console.log("TaskExecutedEvent not found: ", TaskExecutedEvent);
      setWinner("Erro to fetch Winner");
      setIsOpenAlert({
        type: "warning",
        message: `Erro to fetch Winner, Copy your BetId and check at the explorer:  ${
          (await useBetIdExplorer()).data
        }`,
        isOpen: true,
      });
    }
  }

  async function handleSetHousehand(ReceivedUint256Event: any) {
    if (
      ReceivedUint256Event.owner.topics[0] ===
        id("ReceivedUint256(bytes32,uint8)") &&
      ReceivedUint256Event.owner.topics[1] === currentBetId
    ) {
      console.log(
        "QRNG Received, House hand: ",
        ethers.BigNumber.from(ReceivedUint256Event.owner.topics[2]).toString()
      );
      setHouseHand(
        ethers.BigNumber.from(ReceivedUint256Event.owner.topics[2]).toString()
      );
    } else {
      console.log("ReceivedUint256Event not found: ", ReceivedUint256Event);
      setHouseHand("Erro to fetch House Hand");
      setIsOpenAlert({
        type: "warning",
        message: `Erro to fetch House Hand, Copy your BetId and check at the explorer: ${
          (await useBetIdExplorer()).data
        }`,
        isOpen: true,
      });
    }
  }

  async function handleSetBetResult([
    ReceivedUint256Event,
    TaskExecutedEvent,
  ]: any[]) {
    await handleSetHousehand(ReceivedUint256Event);
    await handleSetWinner(TaskExecutedEvent);
    await fetchBalances(address, handleBalances);
  }

  async function handleWatchEvents() {
    const ReceivedUint256Event = await useWatchBettingEvent({
      eventName: "ReceivedUint256",
    });
    const TaskExecutedEvent = await useWatchBettingEvent({
      eventName: "TaskExecuted",
    });
    return [ReceivedUint256Event, TaskExecutedEvent];
  }

  async function handleSetIds(transaction: any) {
    const logs = transaction.data.logs;
    for (let i = 0; i < logs.length; i++) {
      const element = logs[i];

      if (element.topics[0] === id("RequestedUint256(bytes32)")) {
        console.log("QRNG Requested, RequestId: ", element.topics[1]);
        setRequestId(element.topics[1]);
      }
      if (element.topics[0] === id("TaskCreated(bytes32)")) {
        console.log("Task Created, TaskId: ", element.topics[1]);
        setTaskId(element.topics[1]);
      }
      if (
        element.topics[0] === id("BetPlaced(bytes32,address,uint8,uint8,uint8)")
      ) {
        console.log("Bet Placed, BetId: ", element.topics[1]);
        currentBetId = element.topics[1];
        setBetId(element.topics[1]);
      }
    }
  }

  async function handleBetTxSuccess(transaction: any) {
    setWaitingBet(true);
    // - set RequestId, TaskId and BetId
    await handleSetIds(transaction);
    // - watch event Received(requestId) and event TaskExecuted(requestId)
    const [ReceivedUint256Event, TaskExecutedEvent] = await handleWatchEvents();
    // - set HouseHand and Winner
    await handleSetBetResult([ReceivedUint256Event, TaskExecutedEvent]);
  }

  async function handleBetTx(placeBetTx: any) {
    // Wait Transaction result
    const transaction: any = await useWaitForTransaction({
      hash: placeBetTx.hash,
    });
    // if Success
    if (transaction.data.status != 0) {
      // - open events component and tell the user can close/reload the page
      setIsOpenAlert({
        type: "success",
        message: `Bet placed successful, you can close this page: ${
          (await useHashExplorer({ hash: placeBetTx.hash })).data
        }`,
        isOpen: true,
      });
      setIsLoadingPlaceBet(false);
      await fetchBalances(address, handleBalances);
      await handleBetTxSuccess(transaction);
    } else {
      // if failed, alert failed
      console.log(
        "Transaction failed, please try again:",
        (await useHashExplorer({ hash: placeBetTx.hash })).data
      );
      setIsOpenAlert({
        type: "info",
        message: `Transaction failed, please try again: ${
          (await useHashExplorer({ hash: placeBetTx.hash })).data
        }`,
        isOpen: true,
      });
      await fetchBalances(address, handleBalances);
      handleResetStates();
    }
  }

  async function handlePlaceBet() {
    try {
      console.log("Placing Bet...");
      setIsLoadingPlaceBet(true);
      const placeBetTx = await usePlaceBetTx({
        player: address,
        betFee: betFee.useFee,
        selectedHand: selectedHand,
        selectedGuess: selectedGuess,
        selectedBetAmount: selectedBetAmount,
      });

      if (placeBetTx.success && placeBetTx.hash != undefined) {
        // Alert user Transaction was sent
        console.log(
          "Transaction sent, please wait confirmation:",
          (await useHashExplorer({ hash: placeBetTx.hash })).data
        );
        setIsOpenAlert({
          type: "info",
          message: `Transaction sent, please wait confirmation: ${
            (await useHashExplorer({ hash: placeBetTx.hash })).data
          }`,
          isOpen: true,
        });

        await handleBetTx(placeBetTx);
      } else {
        console.log("Transaction not sent, please try again");
        handleResetStates();
        setIsOpenAlert({
          type: "warning",
          message: "Transaction not sent, please try again",
          isOpen: true,
        });
      }
    } catch (error: any) {
      console.log(error);
      handleResetStates();
      setIsOpenAlert({
        type: "error",
        message: error.message,
        isOpen: true,
      });
    }
  }

  async function handleConfirmBet() {
    if (
      address &&
      selectedHand !== 99 &&
      selectedGuess !== 99 &&
      selectedBetAmount !== 0 &&
      betFee.useFee != undefined
    ) {
      setIsOpenDialog(true);
    }
  }

  async function handleApprove(amount: number) {
    try {
      setIsLoadingApprove(true);
      if (
        isConnected &&
        address != undefined &&
        ethers.BigNumber.from(amount).gt(0)
      ) {
        const approveTx = await useApproveBetting({
          player: address,
          amount: amount,
        });
        if (approveTx.success) {
          console.log("Approve successful");
          await fetchBalances(address, handleBalances);
          setIsOpenAlert({
            type: "success",
            message: "Approve successful",
            isOpen: true,
          });
        } else {
          console.log("Approve failed");
          handleResetStates();
          setIsOpenAlert({
            type: "error",
            message: "Approve failed",
            isOpen: true,
          });
        }
      }
      setIsLoadingApprove(false);
    } catch (error: any) {
      console.log(error);
      handleResetStates();
      setIsOpenAlert({
        type: "error",
        message: error.message,
        isOpen: true,
      });
    }
  }

  useEffect(() => {
    if (
      isConnected &&
      betFee != undefined &&
      selectedHand !== 99 &&
      selectedGuess !== 99 &&
      selectedBetAmount !== 0 &&
      balances.allowance != undefined &&
      ethers.BigNumber.from(balances.allowance).gt(0)
    ) {
      setDisabledBet(false);
    } else {
      setDisabledBet(true);
    }
    return undefined;
  }, [isConnected, selectedHand, selectedGuess, selectedBetAmount]);

  useEffect(() => {
    const getBetFee = async () => {
      try {
        const betFeeTX = await useBetFee();
        if (betFeeTX.success) {
          setBetFee({
            useFee: betFeeTX?.data?.useFee,
            showFee: betFeeTX?.data?.showFee,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (isConnected && address != undefined) {
      getBetFee();
    }

    return undefined;
  }, [isConnected, address]);

  return (
    <>
      <SwitchSelector
        value={selectedGuess}
        onChange={setSelectedGuess}
        options={[0, 1]}
      />
      <SliderSelector value={selectedHand} onChange={setSelectedHand} />
      <AmountSelector
        value={selectedBetAmount}
        onChange={setSelectedBetAmount}
      />
      <p>Bet Fee:</p>
      <p>{betFee.showFee != undefined ? betFee.showFee : "--"}</p>
      <SwitchSelector
        value={aproveOrPermit}
        onChange={setAproveOrPermit}
        options={["Approve", "Permit"]}
      />
      {aproveOrPermit === "Approve" ? (
        <>
          <p>Player betting allowance:</p>
          <p>
            {balances.allowance != undefined
              ? balances.allowance.toString()
              : "--"}
          </p>
          <TextInput
            value={amountToApprove}
            onChange={setAmountToApprove}
            placeholder={"Amount to Approve"}
          />
          <Button
            disabled={amountToApprove == 0}
            text="APPROVE AMOUNT"
            onClick={() => {
              handleApprove(amountToApprove);
            }}
            isLoading={isLoadingApprove}
          />
        </>
      ) : (
        <p>Accept both transactions.</p>
      )}

      <Button
        disabled={disabledBet}
        text="REVIEW AND PLACE THE BET"
        onClick={handleConfirmBet}
        isLoading={isLoadingPlaceBet}
      />
      <Dialog
        title="Confirm Bet"
        content={
          <>
            <div className="p-4">{`selectedHand: ${selectedHand}`}</div>
            <div className="p-4">{`selectedGuess: ${selectedGuess}`}</div>
            <div className="p-4">{`selectedBetAmount: ${selectedBetAmount}`}</div>
            <div className="p-4">{`betFee: ${betFee.showFee}`}</div>
          </>
        }
        onAccept={handlePlaceBet}
        isOpen={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
      />
      <Alert
        type={isOpenAlert.type}
        message={isOpenAlert.message}
        isOpen={isOpenAlert.isOpen}
        setIsOpen={setIsOpenAlert}
      />
    </>
  );
}
