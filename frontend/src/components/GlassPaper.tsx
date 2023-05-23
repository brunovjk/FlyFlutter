import { Paper, styled } from "@mui/material";
import theme from "../config/theme";
import { hexToRgba } from "../helpers";

const GlassPaper = styled(Paper)(() => ({
  color: theme.palette.secondary.light,
  background: hexToRgba(theme.palette.primary.main, 0.35),

  borderRadius: "16px",
  // borderTop: "1px solid rgba(255,255,255,0.3)",
  // borderLeft: "1px solid rgba(255,255,255,0.3)",
  border: "1px rgba(255,255,255,0.1) solid",
  borderBottom: "1px rgba(40,40,40,0.3) solid",
  borderRight: "1px rgba(40,40,40,0.3) solid",
}));

export default GlassPaper;
