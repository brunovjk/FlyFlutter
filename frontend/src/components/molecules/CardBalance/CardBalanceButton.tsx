import React, { FC } from "react";
import {
  CustomPaper,
  CustomTypography,
  CustomButton,
  CustomTooltip,
} from "@/components/atoms";
import { Grid, Stack, Box, Skeleton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface CardBalanceButtonProps {
  label: string;
  value?: string;
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
    <CustomPaper sx={{ width: { xs: "100%", lg: "260px" } }}>
      <Grid
        container
        paddingY={{ xs: "8px", md: "12px" }}
        paddingX={{ xs: "8px", md: "16px" }}
      >
        <Grid item xs={6}>
          <Stack direction="column">
            <CustomTooltip title={tooltip}>
              <Stack direction="row" spacing={1}>
                <CustomTypography
                  sx={{
                    fontWeight: "medium",
                    fontSize: { xs: "0.85rem", md: "0.875rem" },
                    lineHeight: { xs: "1rem", md: "1.5rem" },
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
            <CustomButton
              fullWidth
              onClick={handleClick}
              disabled={buttonDisabled}
              loading={buttonLoading}
            >
              {buttonText}
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};
export default CardBalanceButton;
