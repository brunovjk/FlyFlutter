import React, { FC } from "react";
import {
  CustomPaper,
  CustomTypography,
  CustomTooltip,
} from "@/components/atoms";
import { Skeleton, Stack } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface CardBalanceProps {
  label: string;
  value?: string;
  tooltip: string;
}

const CardBalance: FC<CardBalanceProps> = ({ label, value, tooltip }) => {
  return (
    <CustomPaper sx={{ width: { xs: "100%", md: "128px" } }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingY={{ xs: "8px", md: "12px" }}
        paddingX={{ xs: "8px", md: "16px" }}
      >
        <CustomTooltip title={tooltip}>
          <Stack direction="row" spacing={1}>
            <CustomTypography
              sx={{
                fontWeight: "medium",
                fontSize: { xs: "0.75rem", md: "0.8rem" },
                lineHeight: { xs: "0.85rem", md: "0.9rem" },
                textAlign: "left",
              }}
            >
              {label}
            </CustomTypography>

            <InfoOutlinedIcon
              fontSize="small"
              sx={{ color: "text.secondary" }}
            />
          </Stack>
        </CustomTooltip>
        <Stack direction="row" alignItems="flex-end" spacing={1}>
          <CustomTypography
            sx={{
              fontWeight: "light",
              fontSize: { xs: "1rem", md: "1.25rem" },
              textAlign: "right",
              lineHeight: { xs: "1rem", md: "1.5rem" },
              minWidth: "48px",
            }}
          >
            {value ? value : <Skeleton />}
          </CustomTypography>
          <CustomTypography
            sx={{
              fontWeight: "light",
              fontSize: { xs: "0.85rem", md: "0.875rem" },
              textAlign: "left",
            }}
          >
            FFC
          </CustomTypography>
        </Stack>
      </Stack>
    </CustomPaper>
  );
};
export default CardBalance;
