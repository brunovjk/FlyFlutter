import { makeStyles } from "@mui/styles";
import { theme } from "@/config/theme";

const commonStyle = {};

export const useStyles = makeStyles({
  defaultStyle: {
    borderRadius: "4px",
    border: "2px solid",
    borderColor: theme.palette.text.primary,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    cursor: "pointer",
    "&:hover": {
      transform: "translateX(-3px) translateY(-3px)",
      border: "2px solid",
      backgroundColor: theme.palette.common.white,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
    "&:active": {
      transform: "translateX(-1px) translateY(-1px)",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    },
    ...commonStyle,
  },
  connectedStyle: {
    borderRadius: "24px",
    border: "2px solid",
    borderColor: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    cursor: "pointer",
    "&:hover": {
      transform: "translateX(-3px) translateY(-3px)",
      border: "2px solid",
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
    "&:active": {
      transform: "translateX(-1px) translateY(-1px)",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    },
    ...commonStyle,
  },
  pressedStyle: {
    borderRadius: "24px",
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    cursor: "pointer",
    transform: "translateX(-1px) translateY(-1px)",
    boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
    "&:hover": {
      transform: "translateX(-1px) translateY(-1px)",
      boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
      backgroundColor: theme.palette.common.white,
    },
    ...commonStyle,
  },
  disabledStyle: {
    borderRadius: "24px",
    border: "2px solid",
    backgroundColor: theme.palette.common.lightGrey,
    color: theme.palette.common.grey,
    ...commonStyle,
  },
});
