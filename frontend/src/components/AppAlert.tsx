import React, { useRef, FC } from "react";
import { Snackbar, Link } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const CustomAlert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const AppAlert: FC<AppAlertProps> = ({ isOpen, severity, message, link }) => {
  const renderMessage = () => {
    if (link) {
      return (
        <>
          {message}{" "}
          <Link href={link} target="_blank" rel="noopener">
            {link}
          </Link>
        </>
      );
    }
    return message;
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={5000}>
      <CustomAlert severity={severity}>{renderMessage()}</CustomAlert>
    </Snackbar>
  );
};

export default AppAlert;
