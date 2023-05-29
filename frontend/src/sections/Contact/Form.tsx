import React, { FC, useState } from "react";
import { Box, Stack, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import LoadingButton from "@mui/lab/LoadingButton";
import { AppAlert } from "../../components";

const Form: FC = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [openAlert, setOpenAlert] = useState<AppAlertProps>({
    severity: "info",
    message: "",
    link: undefined,
    isOpen: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetch("/api/confirmationContact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        setSending(false);
        setName("");
        setEmail("");
        setMessage("");
        setOpenAlert({
          severity: "success",
          message: `${t("contact.messageSent")}`,
          isOpen: true,
        });
      } else {
        setSending(false);
        setName("");
        setEmail("");
        setMessage("");
        setOpenAlert({
          severity: "warning",
          message: `${t("contact.sendErrorMessage")}`,
          isOpen: true,
        });
      }
    } catch (error: any) {
      setSending(false);
      setName("");
      setEmail("");
      setMessage("");
      setOpenAlert({
        severity: "warning",
        message: `${t("contact.sendErrorMessage")}`,
        isOpen: true,
      });
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            required
            id="contact-name"
            label={t("contact.nameLabel")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            id="contact-email"
            label={t("contact.emailLabel")}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="contact-send-message"
            label={t("contact.messageLabel")}
            multiline
            minRows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <LoadingButton
            type="submit"
            sx={{ maxWidth: "192px" }}
            loading={sending}
          >
            {t("contact.sendButton")}
          </LoadingButton>
        </Stack>
      </form>
      <Box sx={{ position: "absolute", bottom: 0, left: 0 }}>
        <AppAlert openAlert={openAlert} setOpenAlert={setOpenAlert} />
      </Box>
    </>
  );
};

export default Form;
