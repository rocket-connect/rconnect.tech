import { createTransport } from "nodemailer";
import * as config from "./config";
import { Request } from "express";

export const transporter = createTransport({
  // @ts-ignore - this is a bug in the types?
  host: config.EMAIL_HOST,
  secureConnection: false,
  port: 587,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: config.EMAIL_SENDER_ADDRESS,
    pass: config.EMAIL_SENDER_PASSWORD,
  },
});

export async function connect() {
  console.log("Connecting to email");

  await transporter.verify();

  console.log("Email Connected");
}

export async function handler(req: Request<{}>, res: any) {
  try {
    await transporter.sendMail({
      to: req.body.email,
      from: config.EMAIL_SENDER_ADDRESS,
      subject: "Rocket Connect Contact",
      text: `Thank you for contacting us ${req.body.email}, we will get back to you as soon as possible.`,
      cc: [config.EMAIL_SENDER_ADDRESS, "launch@rocketconnect.co.uk"],
    });

    res.status(200).end();
  } catch (error) {
    // @ts-ignore - this is a bug in the types?
    res.status(500).end();
  }
}
