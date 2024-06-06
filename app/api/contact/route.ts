import { createTransport } from "nodemailer";

export const transporter = createTransport({
  // @ts-ignore - this is a bug in the types?
  host: process.env.EMAIL_HOST,
  secureConnection: false,
  port: 587,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.EMAIL_SENDER_ADDRESS,
    pass: process.env.EMAIL_SENDER_PASSWORD,
  },
});

export async function connect() {
  console.log("Connecting to email");

  await transporter.verify();

  console.log("Email Connected");
}

export async function handler({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await transporter.sendMail({
      to: email,
      from: process.env.EMAIL_SENDER_ADDRESS,
      subject: "Rocket Connect Contact",
      text: `Thank you for contacting us ${name}, we will get back to you as soon as possible. Your message '${message}'`,
      cc: [
        process.env.EMAIL_SENDER_ADDRESS as string,
        "launch@rocketconnect.co.uk",
      ],
    });
  } catch (error) {
    // @ts-ignore - this is a bug in the types?
    res.status(500).end();
  }
}

export async function POST(req: Request) {
  const { email, name, message } = await req.json();

  await handler({ email, name, message });

  return Response.json({});
}
