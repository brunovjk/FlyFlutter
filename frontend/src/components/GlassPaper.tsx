import { Paper, styled } from "@mui/material";
import { hexToRgba } from "../helpers";

export const PaperStyle = styled(Paper)(({ theme }) => ({
  color: theme.palette.secondary.light,
  background: hexToRgba(theme.palette.primary.light, 0.75),

  borderRadius: "16px",
  border: `1px ${hexToRgba(theme.palette.common.white, 0.1)} solid`,
  borderBottom: `1px ${hexToRgba(theme.palette.common.black, 0.3)} solid`,
  borderRight: `1px ${hexToRgba(theme.palette.common.black, 0.3)} solid`,
}));

export const GlassPaper = styled(PaperStyle)(({ theme }) => ({
  boxShadow: `8px 8px 8px ${hexToRgba(theme.palette.primary.main, 0.35)}`,
  backdropFilter: "blur(12px)",
}));

export const GlassPaperLargeShadow = styled(PaperStyle)(({ theme }) => ({
  boxShadow: `16px 16px 16px ${hexToRgba(theme.palette.primary.main, 0.6)}`,
  backdropFilter: "blur(12px)",
}));

export const GlassPaperNoBlur = styled(PaperStyle)(({ theme }) => ({
  boxShadow: `8px 8px 8px ${hexToRgba(theme.palette.primary.main, 0.35)}`,
}));
