import { theme } from "@/config/theme";
import { makeStyles } from "@mui/styles";

const commonStyle = {
  transition: "all 0.5s ease-in-out",
};

export const useStyles = makeStyles({
  defaultStyle: {
    backgroundColor: theme.palette.primary.dark,
    ...commonStyle,
  },
  connectedStyle: {
    backgroundColor: theme.palette.primary.white,
    ...commonStyle,
  },
});
