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
import { useHashExplorer } from "@/web3hooks/useExplorer";
import { useWatchBettingEvent } from "@/web3hooks/useWatchBettingEvent";
import { useWaitForTransaction } from "@/web3hooks/useWaitForTransaction";
import { useAllowanceBetting } from "@/web3hooks/useAllowanceBetting";
import { useApproveBetting } from "@/web3hooks/useApproveBetting";

export default function Play({
  setRequestId,
  setTaskId,
  setBetId,
  setHouseHand,
  setWinner,
  setWaitingBet,
}: {
  setRequestId: any;
  setTaskId: any;
  setBetId: any;
  setHouseHand: any;
  setWinner: any;
  setWaitingBet: any;
}) {
  const { address, isConnected } = useAccount();

  const [betFee, setBetFee] = useState<number | ethers.BigNumber | undefined>(
    undefined
  );

  const [selectedHand, setSelectedHand] = useState<number>(99);
  const [selectedGuess, setSelectedGuess] = useState<number>(99);
  const [selectedBetAmount, setSelectedBetAmount] = useState<number>(0);

  const [aproveOrPermit, setAproveOrPermit] = useState<string>("Approve");
  const [amountToApprove, setAmountToApprove] = useState<number>(0);
  const [bettingAllowance, setBettingAllowance] = useState<
    number | ethers.BigNumber | undefined
  >(undefined);

  const [disabledBet, setDisabledBet] = useState<boolean>(true);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

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
    }, 3000);
  }

  async function handleSetWinner(TaskExecutedEvent: any) {
    if (
      TaskExecutedEvent.owner.topics[0] === id("TaskExecuted(bytes32,string)")
      // && TaskExecutedEvent.owner.topics[1] === requestId
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
      handleResetStates();
    }
  }

  async function handleSetHousehand(ReceivedUint256Event: any) {
    if (
      ReceivedUint256Event.owner.topics[0] ===
      id("ReceivedUint256(bytes32,uint8)")
      // && ReceivedUint256Event.owner.topics[1] === requestId
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
      handleResetStates();
    }
  }

  async function handleSetBetResult([
    ReceivedUint256Event,
    TaskExecutedEvent,
  ]: any[]) {
    await handleSetHousehand(ReceivedUint256Event);
    await handleSetWinner(TaskExecutedEvent);
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
        setBetId(element.topics[1]);
      }
    }
  }

  async function handleBetTxSuccess(transaction: any) {
    // - open events component and tell the user can close/reload the page
    setWaitingBet(true);
    // - set RequestId, TaskId and BetId
    await handleSetIds(transaction);
    // - watch event Received(requestId) and event TaskExecuted(requestId)
    const [ReceivedUint256Event, TaskExecutedEvent] = await handleWatchEvents();
    // - set HouseHand and Winner
    await handleSetBetResult([ReceivedUint256Event, TaskExecutedEvent]);
  }

  async function handleBetTx(placeBetTx: any) {
    // Alert user Transaction was sent
    console.log(
      "Transaction was sent, please wait confirmation:",
      (await useHashExplorer({ hash: placeBetTx.hash })).data
    );
    // Wait Transaction result
    const transaction: any = await useWaitForTransaction({
      hash: placeBetTx.hash,
    });
    // if Success
    if (transaction.data.status != 0) {
      await handleBetTxSuccess(transaction);
    } else {
      // if failed, alert failed
      console.log(
        "Transaction has failed, please try again:",
        (await useHashExplorer({ hash: placeBetTx.hash })).data
      );
      handleResetStates();
    }
  }

  async function handlePlaceBet() {
    try {
      console.log("Placing Bet...");
      const placeBetTx = await usePlaceBetTx({
        player: address,
        betFee: betFee,
        selectedHand: selectedHand,
        selectedGuess: selectedGuess,
        selectedBetAmount: selectedBetAmount,
      });

      if (placeBetTx.success && placeBetTx.hash != undefined) {
        await handleBetTx(placeBetTx);
      } else {
        console.log("Transaction not sent, please try again");
        handleResetStates();
      }
    } catch (error) {
      console.log(error);
      handleResetStates();
    }
  }

  async function handleConfirmBet() {
    if (
      address &&
      selectedHand !== 99 &&
      selectedGuess !== 99 &&
      selectedBetAmount !== 0 &&
      betFee != undefined
    ) {
      setIsOpenDialog(true);
    }
  }

  async function handleApprove(amount: number) {
    try {
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
        } else {
          console.log("Approve failed");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (
      isConnected &&
      betFee != undefined &&
      selectedHand !== 99 &&
      selectedGuess !== 99 &&
      selectedBetAmount !== 0 &&
      bettingAllowance != undefined &&
      ethers.BigNumber.from(bettingAllowance).gt(0)
    ) {
      setDisabledBet(false);
    } else {
      setDisabledBet(true);
    }
    return undefined;
  }, [isConnected, selectedHand, selectedGuess, selectedBetAmount]);

  useEffect(() => {
    const getPlayerBettingAllowance = async () => {
      try {
        const bettingAllowanceTX: number | ethers.BigNumber | undefined = (
          await useAllowanceBetting({ player: address })
        ).data;
        if (bettingAllowanceTX != undefined) {
          setBettingAllowance(bettingAllowanceTX);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const getBetFee = async () => {
      try {
        const betFeeTX = (await useBetFee()).fee;
        if (betFeeTX != undefined) {
          setBetFee(betFeeTX);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (isConnected && address != undefined) {
      getPlayerBettingAllowance();
      getBetFee();
    }

    return undefined;
  }, [isConnected, address]);

  return (
    <>
      <SwitchSelector
        value={selectedHand}
        onChange={setSelectedHand}
        options={[0, 1]}
      />
      <SliderSelector value={selectedGuess} onChange={setSelectedGuess} />
      <AmountSelector
        value={selectedBetAmount}
        onChange={setSelectedBetAmount}
      />
      <p>Bet Fee:</p>
      <p>{betFee != undefined ? betFee.toString() : "--"}</p>
      <SwitchSelector
        value={aproveOrPermit}
        onChange={setAproveOrPermit}
        options={["Approve", "Permit"]}
      />
      {aproveOrPermit === "Approve" ? (
        <>
          <p>Player betting allowance:</p>
          <p>
            {bettingAllowance != undefined ? bettingAllowance.toString() : "--"}
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
          />
        </>
      ) : (
        <p>Accept both transactions.</p>
      )}

      <Button
        disabled={disabledBet}
        text="REVIEW AND PLACE THE BET"
        onClick={handleConfirmBet}
      />
      <Dialog
        title="Confirm Bet"
        text1={`selectedHand: ${selectedHand}`}
        text2={`selectedGuess: ${selectedGuess}`}
        text3={`selectedBetAmount: ${selectedBetAmount}`}
        text4={`betFee: ${betFee}`}
        onAccept={handlePlaceBet}
        isOpen={isOpenDialog}
      />
    </>
  );
}
