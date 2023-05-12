import { makeStyles } from "@mui/styles";
import { theme } from "@/config/theme";

const commonStyle = {
  transition: "all 0.5s ease-in-out",
  textDecoration: "none",
};

export const useStyles = makeStyles({
  defaultStyle: {
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.common.grey,
    },
    "&:active": {
      color: theme.palette.common.white,
    },
    ...commonStyle,
  },
  connectedStyle: {
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
    "&:active": {
      color: theme.palette.secondary.light,
    },
    ...commonStyle,
  },
});
