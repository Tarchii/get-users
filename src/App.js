import User from "./pages/User";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}
