import React, { FC } from "react";
import {
  Snackbar,
  Link,
  Alert,
  AlertTitle,
  IconButton,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const StyledSnackbar = styled(Snackbar)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  position: "fixed",
  bottom: 0,
  left: 0,
  margin: "16px",
});

const AppAlert: FC<{
  openAlert: AppAlertProps;
  setOpenAlert: React.Dispatch<React.SetStateAction<AppAlertProps>>;
}> = ({ openAlert, setOpenAlert }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const handleClose = () => {
    setOpenAlert({ isOpen: false });
  };

  const renderMessage = (message?: string, link?: string) => {
    if (link) {
      return (
        <Typography variant="body1">
          {message}{" "}
          <Link
            href={link}
            target="_blank"
            rel="noopener"
            color={theme.palette.secondary.main}
          >
            {" "}
            {`${t("appAlert.checkExplorer")}`}
          </Link>
        </Typography>
      );
    }
    return <Typography variant="body1">{message}</Typography>;
  };

  return (
    <StyledSnackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={openAlert.isOpen}
      onClose={handleClose}
      autoHideDuration={5000}
    >
      <Alert
        variant="outlined"
        elevation={6}
        onClose={handleClose}
        severity={openAlert.severity}
        action={
          <IconButton
            aria-label="close"
            color={openAlert.severity}
            onClick={handleClose}
          >
            <CloseIcon color={openAlert.severity} />
          </IconButton>
        }
        sx={{ m: 4 }}
      >
        <AlertTitle>
          <Typography variant="body1">{openAlert.severity}</Typography>
        </AlertTitle>
        {renderMessage(openAlert.message, openAlert.link)}
      </Alert>
    </StyledSnackbar>
  );
};

export default AppAlert;
