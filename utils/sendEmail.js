import nodemailer from "nodemailer";

export const sendEmail = async (options) => {

const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true, // Use secure connection (TLS)
    auth: {
      user: "apikey", // Your SendGrid API key
      pass: "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"
    }
  });
  const info = await transporter.sendMail({
    from: `"Your Website" <minanagykhalefa@gmail.com>`,
    to: options.recipientEmail,
    subject: options.emailSubject,
    html: options.emailContent,
  });

  return info;
};
