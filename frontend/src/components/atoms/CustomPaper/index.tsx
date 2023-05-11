import { FC } from "react";
import { useConnectionSync } from "@/hooks/useConnectionSync";
import Paper, { PaperProps } from "@mui/material/Paper";
import { useStyles } from "./style";

const CustomPaper: FC<PaperProps> = ({ children, sx = {}, ...rest }) => {
  const isConnected = useConnectionSync();
  const classes = useStyles();

  return (
    <Paper
      {...rest}
      className={isConnected ? classes.connectedStyle : classes.defaultStyle}
      sx={sx}
    >
      {children}
    </Paper>
  );
};

export default CustomPaper;
