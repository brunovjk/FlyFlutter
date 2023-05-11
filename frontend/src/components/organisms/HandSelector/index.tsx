import { CustomButton } from "@/components/atoms";
import { ButtonGroup, FormControl, FormLabel } from "@mui/material";
import { useEffect, useState } from "react";

type HandType = 0 | 1 | 2 | 3 | 4 | 5;

interface HandFormControlProps {
  label: string;
  value: HandType;
  onChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newValue: HandType
  ) => void;
}

const HandSelector = ({ label, value, onChange }: HandFormControlProps) => {
  const [selectedHand, setSelectedHand] = useState<HandType>(value);

  useEffect(() => {
    setSelectedHand(value);
  }, [value]);

  const handleHandChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    hand: HandType
  ) => {
    setSelectedHand(hand);
    onChange(event, hand);
  };

  return (
    <FormControl component="fieldset">
      <ButtonGroup aria-label="hand selection">
        {[0, 1, 2, 3, 4, 5].map((hand) => (
          <CustomButton
            key={hand}
            onClick={(event) => handleHandChange(event, hand)}
            pressed={hand === selectedHand}
          >
            {hand.toString()}
          </CustomButton>
        ))}
      </ButtonGroup>
    </FormControl>
  );
};

export default HandSelector;
