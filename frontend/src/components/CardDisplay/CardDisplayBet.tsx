import React, { FC } from "react";
import { Skeleton, Typography, Tooltip, Stack, useTheme } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { GlassPaper } from "../GlassPaper";

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
  const theme = useTheme();

  return (
    <GlassPaper>
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
            {guess ? (
              guess
            ) : (
              <Skeleton sx={{ bgcolor: theme.palette.secondary.dark }} />
            )}
          </Typography>

          <Typography variant="h6" sx={{ width: "100%" }}>
            {hand ? (
              hand
            ) : (
              <Skeleton sx={{ bgcolor: theme.palette.secondary.dark }} />
            )}
          </Typography>
        </Stack>
      </Stack>
    </GlassPaper>
  );
};
export default CardDisplayBet;
