import React, { FC, useState } from "react";
import { Stack, TextField } from "@mui/material";
import { CustomButton } from "@/components/atoms";
import { AppAlert } from "@/components/molecules";
import { contact } from "@/assets/copy";

const ContactMessage: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState<AppAlertProps>({
    severity: "info",
    message: "Alert popup",
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
        setIsOpenAlert({
          severity: "success",
          message: "Message sent! I will contact you as soon as possible",
          isOpen: true,
        });
      } else {
        setSending(false);
        setName("");
        setEmail("");
        setMessage("");
        setIsOpenAlert({
          severity: "warning",
          message: "Failed to send message, please try again.",
          isOpen: true,
        });
      }
    } catch (error: any) {
      setSending(false);
      setName("");
      setEmail("");
      setMessage("");
      setIsOpenAlert({
        severity: "warning",
        message: "Failed to send message, please try again.",
        isOpen: true,
      });
      console.log(error.message);
    }
  };

  function handleAlertClose() {
    setIsOpenAlert({
      severity: "info",
      message: "Alert popup",
      isOpen: false,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing="20px">
          <TextField
            required
            id="contact-name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            id="contact-email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="contact-send-message"
            label="Message"
            multiline
            minRows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <CustomButton
            type="submit"
            variant="outlined"
            sx={{ maxWidth: "192px" }}
            loading={sending}
          >
            {contact.sendButton}
          </CustomButton>
        </Stack>
      </form>
      <AppAlert
        isOpen={isOpenAlert.isOpen}
        severity={isOpenAlert.severity}
        message={isOpenAlert.message}
        handleClose={handleAlertClose}
      />
    </>
  );
};

export default ContactMessage;
