import express from "express";
import * as config from "./config";
import cors from "cors";
import expressStaticGzip from "express-static-gzip";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(expressStaticGzip(config.STATIC_FOLDER, {}));
app.get("*", expressStaticGzip(config.STATIC_FOLDER, {}));
app.use("*", expressStaticGzip(config.STATIC_FOLDER, {}));

export async function start() {
  await app.listen(config.PORT);
  console.log("Server Online ", config.PORT);
}
