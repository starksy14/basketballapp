import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Wooden from "./pages/Wooden";
import Purdue from "./pages/Purdue";
import UCLA from "./pages/UCLA";
import Washington from "./pages/Washington";
import VCU from "./pages/VCU";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Layout />} />
          <Route path="UCLA" element={<UCLA />} />
          <Route path="Purdue" element={<Purdue />} />
          <Route path="Washington" element={<Washington />} />
          <Route path="VCU" element={<VCU />} />
          <Route path="Wooden" element={<Wooden />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
