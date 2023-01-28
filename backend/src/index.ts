import { start } from "./app";

async function main() {
  console.log("Starting server...");

  await start();

  console.log("Server started");
}

main();
