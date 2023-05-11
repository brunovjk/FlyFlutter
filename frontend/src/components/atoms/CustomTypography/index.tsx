import { FC } from "react";
import { useConnectionSync } from "@/hooks/useConnectionSync";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { useStyles } from "./style";

const CustomTypography: FC<TypographyProps> = ({
  children,
  sx = {},
  ...rest
}) => {
  const isConnected = useConnectionSync();
  const classes = useStyles();

  return (
    <Typography
      {...rest}
      className={isConnected ? classes.connectedStyle : classes.defaultStyle}
      sx={sx}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
