import dotenv from "dotenv";
dotenv.config();

export const STATIC_FOLDER =
  (process.env.STATIC_FOLDER as string) || "../frontend/dist";

export const HTTP_PORT = (process.env.HTTP_PORT as string) || "3000";

export const EMAIL_HOST = process.env.EMAIL_HOST as string;

export const EMAIL_SENDER_ADDRESS = process.env.EMAIL_SENDER_ADDRESS as string;

export const EMAIL_SENDER_PASSWORD = process.env
  .EMAIL_SENDER_PASSWORD as string;
