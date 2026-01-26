import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || ""
  }
});

export const sendVerificationMail = async (email: string, token: string) => {
  const base = (process.env.BACKEND_URL || "http://localhost:5400").replace(/\/$/, "");
  const url = `${base}/api/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: email,
    subject: "Verify your email",
    html: `
      <p>Click the link below to verify your email!.</p>
      <p><a href="${url}">${url}</a></p>
      <p>(This link expires in 15 minutes)  .</p>
    `
  });
    console.log("Message sent:", info.messageId);
};
