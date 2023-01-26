import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Header } from "./components/views/Header";

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
