import React, { FC } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const ConfirmDialog: FC<DialogProps> = ({
  open,
  title,
  body,
  setOpenDialog,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
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
      // PaperProps={{ className: classes.glassDialog }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContent>{body}</DialogContent>
      </DialogContent>
      <DialogActions>
        <LoadingButton onClick={handleCancel}>{cancelText}</LoadingButton>
        <LoadingButton onClick={handleAccept} autoFocus>
          {confirmText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
