import React, { FC } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { CustomButton } from "@/components/atoms";
import { makeStyles } from "@mui/styles";
import { theme } from "@/config/theme";

const useStyles = makeStyles({
  glassDialog: {
    padding: "16px",
    color: "rgba(255, 255, 255, 1)",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "24px",
    boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
    borderBottom: "0px solid rgba(255, 255, 255, 0)",
    borderRight: "0px solid rgba(255, 255, 255, 0)",
  },
});

export interface DialogProps {
  open: boolean;
  title: string;
  body: JSX.Element;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => Promise<void>;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmDialog: FC<DialogProps> = ({
  open,
  title,
  body,
  setOpenDialog,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  const classes = useStyles();

  const handleAccept = async () => {
    setOpenDialog(false);
    await onConfirm();
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      PaperProps={{ className: classes.glassDialog }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContent>{body}</DialogContent>
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={handleCancel}>{cancelText}</CustomButton>
        <CustomButton onClick={handleAccept} autoFocus>
          {confirmText}
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
