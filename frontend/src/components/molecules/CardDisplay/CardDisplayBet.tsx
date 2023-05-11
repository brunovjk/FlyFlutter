import React, { FC } from "react";
import {
  CustomPaper,
  CustomTypography,
  CustomTooltip,
} from "@/components/atoms";
import { Skeleton, Grid, Stack } from "@mui/material";
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
    <CustomPaper>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={2}
        spacing={1}
      >
        {/* Label Info */}
        <CustomTooltip title={tooltip}>
          <Stack direction="row" spacing={0.5}>
            <CustomTypography
              variant="body2"
              sx={{
                marginTop: "0.5rem",
              }}
            >
              {label}
            </CustomTypography>

            <InfoOutlinedIcon
              sx={{
                color: "text.secondary",
                fontSize: "1rem",
                marginBottom: "0.5rem",
              }}
            />
          </Stack>
        </CustomTooltip>
        {/* Display */}
        <Stack direction="row" spacing={1.5} sx={{ width: "64px" }}>
          <CustomTypography variant="h6" sx={{ width: "100%" }}>
            {guess ? guess : <Skeleton />}
          </CustomTypography>

          <CustomTypography variant="h6" sx={{ width: "100%" }}>
            {hand ? hand : <Skeleton />}
          </CustomTypography>
        </Stack>
      </Stack>
    </CustomPaper>
  );
};
export default CardDisplayBet;

// {guess ? guess : <Skeleton />}

// {hand ? hand : <Skeleton />}
