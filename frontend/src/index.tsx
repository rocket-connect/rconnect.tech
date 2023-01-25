import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./Router";

const root = createRoot(document.querySelector("#root"));

root.render(<Router />);
