import React, { FC } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import LoadingButton from "@mui/lab/LoadingButton";
import { GlassPaperLargeShadow } from "./GlassPaper";
import { useTranslation } from "react-i18next";

const ConfirmDialog: FC<DialogProps> = ({
  open,
  title,
  body,
  setOpenDialog,
  onConfirm,
}) => {
  const { t } = useTranslation();

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
      PaperComponent={GlassPaperLargeShadow}
      // PaperProps={{ className: classes.glassDialog }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContent>{body}</DialogContent>
      </DialogContent>
      <DialogActions>
        <LoadingButton onClick={handleCancel}>
          {t("confirmDialog.cancelText")}
        </LoadingButton>
        <LoadingButton onClick={handleAccept} autoFocus>
          {t("confirmDialog.confirmText")}
        </LoadingButton>{" "}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
