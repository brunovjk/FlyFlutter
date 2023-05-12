import React from "react";
import { styled, Tooltip, TooltipProps } from "@mui/material";

interface CustomTooltipProps extends TooltipProps {
  className?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  className,
  ...props
}) => {
  const CustomTooltipStyled = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ tooltip: className }} />
  ))(({ theme }) => ({
    background: "rgba(255,255,255,0.1)",
    color: theme.palette.common.white, // White text color
    borderRadius: "15px",
    boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
    backdropFilter: "blur(5px)",
    borderTop: "1px solid rgba(255,255,255,0.5)",
    borderLeft: "1px solid rgba(255,255,255,0.5)",
    borderBottom: "0px solid rgba(255,255,255,0)",
    borderRight: "0px solid rgba(255,255,255,0)",
    fontSize: "16px",
    lineHeight: "24px",
    padding: "16px",
  }));

  return <CustomTooltipStyled {...props} className={className} />;
};

export default CustomTooltip;

// import { FC } from "react";
// import { useConnectionSync } from "@/hooks/useConnectionSync";
// import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
// import { useStyles } from "./style";

// const CustomTooltip: FC<TooltipProps> = ({ children, sx = {}, ...rest }) => {
//   const isConnected = useConnectionSync();
//   const classes = useStyles();

//   return (
//     <Tooltip
//       {...rest}
//       className={isConnected ? classes.connectedStyle : classes.defaultStyle}
//       sx={sx}
//     >
//       {children}
//     </Tooltip>
//   );
// };

// export default CustomTooltip;
