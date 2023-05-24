import React, { FC } from "react";
import { Skeleton, Typography, Tooltip, Stack } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { GlassPaper } from "../GlassPaper";
import theme from "../../config/theme";

interface CardDisplayResulttProps {
  label: string;
  winner?: string;
  tooltip: string;
}

const CardDisplayResultt: FC<CardDisplayResulttProps> = ({
  label,
  winner,
  tooltip,
}) => {
  return (
    <GlassPaper>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={2}
        spacing={1}
        sx={{ height: { xs: "96px", md: "124px" } }}
      >
        {/* Label Info */}
        <Tooltip title={tooltip}>
          <Stack direction="row" spacing={0.5}>
            <Typography
              textAlign="left"
              sx={{
                marginTop: "0.5rem",
                width: "100%",
              }}
            >
              {label}
            </Typography>

            <InfoOutlinedIcon
              sx={{
                color: "secondary.main",
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
              }}
            />
          </Stack>
        </Tooltip>
        {/* Display */}
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ width: { xs: "96px", md: "124px" } }}
        >
          {winner ? (
            winner
          ) : (
            <Skeleton sx={{ bgcolor: theme.palette.secondary.dark }} />
          )}
        </Typography>
      </Stack>
    </GlassPaper>
  );
};
export default CardDisplayResultt;
