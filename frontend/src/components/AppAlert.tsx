import React, { useEffect, FC, useState, useContext } from "react";
import {
  Snackbar,
  Link,
  Alert,
  AlertTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../config/theme";
import { FlyFlutterContext } from "../sections/FlyFlutter/context";

const AppAlert: FC<AppAlertProps> = ({ isOpen, severity, message, link }) => {
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
            Explorer
          </Link>
        </Typography>
      );
    }
    return <Typography variant="body1">{message}</Typography>;
  };

  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={5000}>
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
        sx={{ mb: 2 }}
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
