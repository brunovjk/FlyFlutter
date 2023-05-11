import { makeStyles } from "@mui/styles";
import { theme } from "@/config/theme";

const commonStyle = {
  transition: "all 0.5s ease-in-out",
};

export const useStyles = makeStyles({
  defaultStyle: {
    ...commonStyle,
  },
  connectedStyle: {
    background: "rgba(255,255,255,0.1)",
    color: theme.palette.common.white,
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
    ...commonStyle,
  },
});
