import express from "express";
import * as config from "./config";
import cors from "cors";
import expressStaticGzip from "express-static-gzip";
import * as email from "./email";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(expressStaticGzip(config.STATIC_FOLDER, {}));

app.post("/api/contact", (req, res) => email.handler(req, res));
app.get("*", expressStaticGzip(config.STATIC_FOLDER, {}));
app.use("*", expressStaticGzip(config.STATIC_FOLDER, {}));

export async function start() {
  await app.listen(config.HTTP_PORT);
  console.log("Server Online ", config.HTTP_PORT);
}
