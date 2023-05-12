import { theme } from "@/config/theme";
import { makeStyles } from "@mui/styles";

const commonStyle = {
  transition: "all 0.5s ease-in-out",
  overflow: "hidden",
};

export const useStyles = makeStyles({
  defaultStyle: {
    backgroundColor: theme.palette.common.white,
    ...commonStyle,
  },
  connectedStyle: {
    backgroundColor: theme.palette.primary.dark,
    ...commonStyle,
  },
});
