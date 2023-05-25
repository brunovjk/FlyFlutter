import nodemailer from "nodemailer";

export default async (req: any, res: any) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.REACT_APP_GMAIL_USER,
      pass: process.env.REACT_APP_GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.REACT_APP_GMAIL_USER,
    to: email,
    subject: "Your message has been received",
    html: `<h1 style="color: #2a9d8f;">Message Received</h1> <p>Dear ${name},</p><p>Thank you for contacting me! I have received your message and will respond as soon as possible.</p> <p>Best regards,</p> <p>Bruno Rocha</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Confirmation sent!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send confirmation" });
  }
};
