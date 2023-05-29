import React, { useEffect, FC, useState, useContext } from "react";
import {
  Snackbar,
  Link,
  Alert,
  AlertTitle,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FlyFlutterContext } from "../sections/FlyFlutter/context";
import { useTranslation } from "react-i18next";

const AppAlert: FC<AppAlertProps> = ({ isOpen, severity, message, link }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { setOpenAlert } = useContext(FlyFlutterContext);

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
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={5000}
    >
      <Alert
        variant="outlined"
        elevation={6}
        onClose={handleClose}
        severity={severity}
        action={
          <IconButton aria-label="close" color={severity} onClick={handleClose}>
            <CloseIcon color={severity} />
          </IconButton>
        }
        sx={{ m: 4 }}
      >
        <AlertTitle>
          <Typography variant="body1">{severity}</Typography>
        </AlertTitle>
        {renderMessage(message, link)}
      </Alert>
    </Snackbar>
  );
};

export default AppAlert;
