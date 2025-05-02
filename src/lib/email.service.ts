import nodemailer from "nodemailer";

export const sendResetPassword = async (toEmail: string, token: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const resetLink = `https://your-frontend.com/reset-password?token=${token}`;

  const mailOptions = {
    from: '"Support" <no-reply@yourapp.com>',
    to: toEmail,
    subject: "Reset Password Akun Anda",
    html: `
      <p>Halo,</p>
      <p>Kami menerima permintaan reset password untuk akun Anda.</p>
      <p>Silakan klik tautan di bawah ini untuk mengatur ulang password Anda:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p><b>Token berlaku selama 1 jam.</b></p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
