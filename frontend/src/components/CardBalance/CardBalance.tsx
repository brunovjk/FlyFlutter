import React, { FC } from "react";
import { Skeleton, Stack, Typography, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { GlassPaper } from "../GlassPaper";
import theme from "../../config/theme";
import { ethers } from "ethers";

interface CardBalanceProps {
  label: string;
  value?: number | ethers.BigNumber;
  tooltip: string;
}

const CardBalance: FC<CardBalanceProps> = ({ label, value, tooltip }) => {
  return (
    <GlassPaper
      sx={{
        width: { xs: "100%", md: "128px" },
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingY={{ xs: "8px", md: "12px" }}
        paddingX={{ xs: "8px", md: "16px" }}
      >
        <Tooltip title={tooltip}>
          <Stack direction="row" spacing={1}>
            <Typography
              sx={{
                fontWeight: "medium",
                fontSize: { xs: "0.75rem", md: "0.8rem" },
                lineHeight: { xs: "0.85rem", md: "0.9rem" },
                textAlign: "left",
              }}
            >
              {label}
            </Typography>

            <InfoOutlinedIcon
              fontSize="small"
              sx={{ color: "secondary.main" }}
            />
          </Stack>
        </Tooltip>
        <Stack direction="row" alignItems="flex-end" spacing={1}>
          <Typography
            sx={{
              fontWeight: "light",
              fontSize: { xs: "1rem", md: "1.25rem" },
              textAlign: "right",
              lineHeight: { xs: "1rem", md: "1.5rem" },
              minWidth: "48px",
            }}
          >
            {value ? (
              value.toString()
            ) : (
              <Skeleton sx={{ bgcolor: theme.palette.secondary.dark }} />
            )}
          </Typography>
          <Typography
            sx={{
              fontWeight: "light",
              fontSize: { xs: "0.85rem", md: "0.875rem" },
              textAlign: "left",
            }}
          >
            FFC
          </Typography>
        </Stack>
      </Stack>
    </GlassPaper>
  );
};
export default CardBalance;
