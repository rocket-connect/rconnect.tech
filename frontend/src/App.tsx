import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components";
import { Header } from "./components/Header";

export function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
