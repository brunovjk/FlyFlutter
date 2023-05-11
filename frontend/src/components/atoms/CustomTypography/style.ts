import { makeStyles } from "@mui/styles";
import { theme } from "@/config/theme";

const commonStyle = {
  transition: "all 0.5s ease-in-out",
};

export const useStyles = makeStyles({
  defaultStyle: {
    color: theme.palette.text.primary,
    ...commonStyle,
  },
  connectedStyle: {
    color: theme.palette.text.secondary,
    ...commonStyle,
  },
});
