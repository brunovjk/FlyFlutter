import { Paper, styled } from "@mui/material";
import theme from "../config/theme";
import { hexToRgba } from "../helpers";

const GlassPaper = styled(Paper)(() => ({
  color: theme.palette.secondary.light,
  background: hexToRgba(theme.palette.primary.main, 0.35),

  borderRadius: "16px",
  borderTop: "1px solid rgba(255,255,255,0.5)",
  borderLeft: "1px solid rgba(255,255,255,0.5)",
}));

export default GlassPaper;
