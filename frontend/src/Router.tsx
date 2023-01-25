import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components";

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
