import React, { FC } from "react";
import {
  CustomPaper,
  CustomTypography,
  CustomTooltip,
} from "@/components/atoms";
import { Skeleton, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

const useStyles = makeStyles({
  shake: {
    animation: "$shake 1s infinite",
  },
  "@keyframes shake": shakeAnimation,
});

const CardDisplayResultt: FC<
  CardDisplayResulttProps & { shaking: boolean }
> = ({ shaking, label, winner, tooltip }) => {
  const classes = useStyles();

  return (
    <CustomPaper className={shaking ? classes.shake : undefined}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={2}
        spacing={1}
        sx={{ height: { xs: "96px", md: "124px" } }}
      >
        {/* Label Info */}
        <CustomTooltip title={tooltip}>
          <Stack direction="row" spacing={0.5}>
            <CustomTypography
              textAlign="left"
              sx={{
                marginTop: "0.5rem",
                width: "100%",
              }}
            >
              {label}
            </CustomTypography>

            <InfoOutlinedIcon
              sx={{
                color: "text.secondary",
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
              }}
            />
          </Stack>
        </CustomTooltip>
        {/* Display */}
        <CustomTypography
          variant="h6"
          textAlign="center"
          sx={{ width: { xs: "96px", md: "124px" } }}
        >
          {winner ? winner : <Skeleton />}
        </CustomTypography>
      </Stack>
    </CustomPaper>
  );
};
export default CardDisplayResultt;
