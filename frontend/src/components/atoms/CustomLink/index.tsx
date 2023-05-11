import { FC } from "react";
import { useConnectionSync } from "@/hooks/useConnectionSync";
import Link, { LinkProps } from "@mui/material/Link";
import { useStyles } from "./style";

const CustomLink: FC<LinkProps> = ({ children, sx = {}, ...rest }) => {
  const isConnected = useConnectionSync();
  const classes = useStyles();

  return (
    <Link
      {...rest}
      className={isConnected ? classes.connectedStyle : classes.defaultStyle}
      sx={sx}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
