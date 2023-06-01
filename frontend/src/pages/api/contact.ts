import nodemailer from "nodemailer";

const sendEmail = async (req: any, res: any) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_GMAIL_USER,
    subject: `New Portifolio message from: ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send message" });
  }
};

export default sendEmail;
