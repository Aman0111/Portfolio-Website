/// <reference types="node" />
import { SMTPClient } from "emailjs";

export type ContactEmailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const client = new SMTPClient({
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  ssl: process.env.SMTP_SSL !== "false",
});

export async function sendContactEmail(payload: ContactEmailPayload) {
  const emailText = `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\n\nMessage:\n${payload.message}`;

  return new Promise((resolve, reject) => {
    client.send(
      {
        text: emailText,
        from: `${payload.name} <${payload.email}>`,
        to: "Aman Dixit <dixitaman.nov.wwe@gmail.com>",
        subject: payload.subject || "New contact message from portfolio",
      },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}
