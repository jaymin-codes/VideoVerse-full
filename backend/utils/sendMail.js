import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "jayminmistry101@gmail.com",
    pass: "lafsmmipyviwrqcq",
  },
});

async function sendMail(to, subject, text, html) {
  const info = await transporter.sendMail({
    from: "jayminmistry101@gmail.com",
    to,
    subject,
    text,
    html: `<div style="background-color: #202020; color: #f0f8ff; margin: 0 auto; padding: 20px; max-width: 600px; font-family: monospace;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="font-size: 24px; font-weight: bold;">Password Reset</h1>
        </div>
        <div style="background-color: #111; padding: 20px; border-radius: 5px;">
          <p>Hello,</p>
          <p>We received a request to reset your password. Click the link below to reset your password.</p>
          <h3><a href="${text}" style="color: #0000EE; text-decoration: none;">Reset Password</a></h3>
          <p>Valid for 5 minutes only</p>
          <p style="margin-top: 20px;">If you did not request a password reset, please ignore this email.</p>
        </div>
      </div>`,
  });
}

export default sendMail;
