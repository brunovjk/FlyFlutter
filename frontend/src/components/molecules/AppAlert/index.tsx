import React, { useRef, FC } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface AppAlertProps {
  isOpen: boolean;
  severity: "info" | "success" | "warning" | "error";
  message: string;
  handleClose: () => void;
}

const CustomAlert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const AppAlert: FC<AppAlertProps> = ({
  isOpen,
  severity,
  message,
  handleClose,
}) => {
  const alertRef = useRef<HTMLDivElement>(null);

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      ref={alertRef}
    >
      <CustomAlert onClose={handleClose} severity={severity}>
        {message}
      </CustomAlert>
    </Snackbar>
  );
};

export default AppAlert;
