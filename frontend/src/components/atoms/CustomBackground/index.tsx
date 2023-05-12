import { FC } from "react";
import { useConnectionSync } from "@/hooks/useConnectionSync";
import Container, { ContainerProps } from "@mui/material/Container";
import { useStyles } from "./style";

const CustomBackground: FC<ContainerProps> = ({
  children,
  sx = {},
  ...rest
}) => {
  const isConnected = useConnectionSync();
  const classes = useStyles();

  return (
    <Container
      disableGutters
      maxWidth={false}
      {...rest}
      className={isConnected ? classes.connectedStyle : classes.defaultStyle}
      sx={sx}
    >
      {children}
    </Container>
  );
};
export default CustomBackground;
