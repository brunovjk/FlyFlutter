interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface NumberInputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

interface AmountSelectorProps {
  value: number;
  onChange: (value: number) => void;
}
