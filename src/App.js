import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Wooden from "./pages/Wooden";
import Purdue from "./pages/Purdue";
import UCLA from "./pages/UCLA";
import Washington from "./pages/Washington";
import VCU from "./pages/VCU";
import SanJoseState from "./pages/SanJoseState";
import Penn from "./pages/Penn";
import PortlandState from "./pages/PortlandState";
import Northeastern from "./pages/Northeastern";
import Evansville from "./pages/Evansville";
import Marist from "./pages/Marist";
import WilliamMary from "./pages/WilliamMary";
import DelawareState from "./pages/DelawareState";
import GameOneTable from "./pages/GameOneTable";
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
          <Route path="SanJoseState" element={<SanJoseState />} />
          <Route path="Penn" element={<Penn />} />
          <Route path="PortlandState" element={<PortlandState />} />
          <Route path="Northeastern" element={<Northeastern />} />
          <Route path="Evansville" element={<Evansville />} />
          <Route path="Marist" element={<Marist />} />
          <Route path="WilliamMary" element={<WilliamMary />} />
          <Route path="DelawareState" element={<DelawareState />} />
          <Route path="GameOneTable" element={<GameOneTable />} />
          <Route path="Wooden" element={<Wooden />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
