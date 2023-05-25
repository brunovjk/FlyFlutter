import React, { FC } from "react";
import { Grid, Stack, Box, Skeleton, Typography, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import { GlassPaper } from "../GlassPaper";
import theme from "../../config/theme";
import { ethers } from "ethers";

interface CardBalanceButtonProps {
  label: string;
  value?: number | ethers.BigNumber;
  buttonText: string;
  buttonDisabled: boolean;
  buttonLoading: boolean;
  handleClick: () => void;
  tooltip: string;
}

const CardBalanceButton: FC<CardBalanceButtonProps> = ({
  label,
  value,
  buttonText,
  buttonDisabled,
  buttonLoading,
  handleClick,
  tooltip,
}) => {
  return (
    <GlassPaper
      sx={{
        width: { xs: "100%", lg: "260px" },
      }}
    >
      <Grid
        container
        paddingY={{ xs: "8px", md: "12px" }}
        paddingX={{ xs: "8px", md: "16px" }}
      >
        <Grid item xs={6}>
          <Stack direction="column">
            <Tooltip title={tooltip}>
              <Stack direction="row" spacing={1}>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: { xs: "0.85rem", md: "0.875rem" },
                    lineHeight: { xs: "1rem", md: "1.5rem" },
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
                  minWidth: "36px",
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
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              height: "100%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoadingButton
              fullWidth
              onClick={handleClick}
              disabled={buttonDisabled}
              loading={buttonLoading}
            >
              {buttonText}
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </GlassPaper>
  );
};
export default CardBalanceButton;
