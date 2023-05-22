import { Routes, Route } from "react-router-dom";
import { Home, Favorite, Checkout } from "../pages";

export default function AllRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
