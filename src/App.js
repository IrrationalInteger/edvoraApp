import MainPage from "./MainPage.js";
import Results from "./Results";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/orders" element={<Results />} />
        <Route path="/users" element={<Results />} />
        <Route path="/products" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
