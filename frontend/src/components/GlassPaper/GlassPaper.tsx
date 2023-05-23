import { Paper, styled } from "@mui/material";
import theme from "../../config/theme";

const GlassPaper = styled(Paper)(() => ({
  transition: `all 1.5s ${theme.transitions.easing.easeInOut}`,

  color: theme.palette.secondary.light,

  background: "rgba( 0, 0, 0, 0.35 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
}));

export default GlassPaper;
