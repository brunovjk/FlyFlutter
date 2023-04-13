import React, { useState } from "react";
import SwitchSelector from "@/components/SwitchSelector";
import SliderSelector from "@/components/SliderSelector";
import AmountSelector from "@/components/AmountSelector";
import Button from "@/components/Button";

export default function Play() {
  const [selectedHand, setSelectedHand] = useState("99");
  const [selectedGuess, setSelectedGuess] = useState(99);
  const [selectedBetAmount, setSelectedBetAmount] = useState(0);

  function handleClick() {
    if (selectedHand != "99" && selectedGuess != 99 && selectedBetAmount != 0) {
      console.log("selectedHand:", selectedHand);
      console.log("selectedGuess:", selectedGuess);
      console.log("selectedBetAmount:", selectedBetAmount);
    }
  }
  return (
    <>
      <SwitchSelector
        value={selectedHand}
        onChange={setSelectedHand}
        options={["Odds", "Evens"]}
      />
      <SliderSelector value={selectedGuess} onChange={setSelectedGuess} />
      <AmountSelector
        value={selectedBetAmount}
        onChange={setSelectedBetAmount}
      />
      <Button text="REVIEW AND PLACE THE BET" onClick={handleClick} />
    </>
  );
}
