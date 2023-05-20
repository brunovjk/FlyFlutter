import React, { FC } from "react";
import { Skeleton, Paper, Typography, Tooltip, Stack } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface CardDisplayResulttProps {
  label: string;
  winner?: string;
  tooltip: string;
}

const shakeAnimation = {
  "0%": {
    transform: "translate(0, 0)",
  },
  "25%": {
    transform: "translate(-3px, 3px)",
  },
  "50%": {
    transform: "translate(3px, -3px)",
  },
  "75%": {
    transform: "translate(-3px, 3px)",
  },
  "100%": {
    transform: "translate(0, 0)",
  },
};

const styles = {
  shake: {
    animation: "$shake 1s infinite",
  },
  "@keyframes shake": shakeAnimation,
};

const CardDisplayResultt: FC<
  CardDisplayResulttProps & { shaking: boolean }
> = ({ shaking, label, winner, tooltip }) => {
  return (
    <Paper style={shaking ? styles.shake : undefined}>
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
          {winner ? winner : <Skeleton />}
        </Typography>
      </Stack>
    </Paper>
  );
};
export default CardDisplayResultt;
