import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const GlassPaper = styled(Paper)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.15)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  padding: theme.spacing(2),
  color: theme.palette.secondary.light,
}));

export default GlassPaper;
