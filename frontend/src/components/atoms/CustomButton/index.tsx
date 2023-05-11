import { FC } from "react";
import { useConnectionSync } from "@/hooks/useConnectionSync";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { useStyles } from "./style";

const CustomButton: FC<LoadingButtonProps & { pressed?: boolean }> = ({
  pressed,
  children,
  sx = {},
  ...rest
}) => {
  const isConnected = useConnectionSync();
  const classes = useStyles();

  return (
    <LoadingButton
      variant="contained"
      {...rest}
      className={
        rest.disabled || rest.loading
          ? classes.disabledStyle
          : isConnected
          ? pressed
            ? classes.pressedStyle
            : classes.connectedStyle
          : classes.defaultStyle
      }
      sx={sx}
    >
      {rest.loading ? " " : children}
    </LoadingButton>
  );
};

export default CustomButton;
