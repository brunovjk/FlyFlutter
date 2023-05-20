import React, { FC } from "react";
import { Skeleton, Paper, Typography, Tooltip, Stack } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface CardDisplayBetProps {
  label: string;
  guess?: string;
  hand?: string;
  tooltip: string;
}

const CardDisplayBet: FC<CardDisplayBetProps> = ({
  label,
  guess,
  hand,
  tooltip,
}) => {
  return (
    <Paper>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={2}
        spacing={1}
      >
        {/* Label Info */}
        <Tooltip title={tooltip}>
          <Stack direction="row" spacing={0.5}>
            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
              }}
            >
              {label}
            </Typography>

            <InfoOutlinedIcon
              sx={{
                color: "secondary.main",
                fontSize: "1rem",
                marginBottom: "0.5rem",
              }}
            />
          </Stack>
        </Tooltip>
        {/* Display */}
        <Stack direction="row" spacing={1.5} sx={{ width: "64px" }}>
          <Typography variant="h6" sx={{ width: "100%" }}>
            {guess ? guess : <Skeleton />}
          </Typography>

          <Typography variant="h6" sx={{ width: "100%" }}>
            {hand ? hand : <Skeleton />}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
export default CardDisplayBet;
