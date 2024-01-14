import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Wooden from "./components/Wooden";
import Purdue from "./components/Purdue";
import UCLA from "./components/UCLA";
import Washington from "./components/Washington";
import VCU from "./components/VCU";
import SanJoseState from "./components/SanJoseState";
import Penn from "./components/Penn";
import PortlandState from "./components/PortlandState";
import Northeastern from "./components/Northeastern";
import Evansville from "./components/Evansville";
import Marist from "./components/Marist";
import WilliamMary from "./components/WilliamMary";
import DelawareState from "./components/DelawareState";
import GameOneTable from "./components/GameOneTable";
import GameOneTableUCLA from "./components/GameOneTableUCLA";
import LinkButton from "./components/LinkButton";
import UCLALinkButton from "./components/UCLALinkButton";
import TexasPurdueBox from "./components/TexasPurdueBox";
import TexasPurdueBoxButton from "./components/TexasPurdueBoxButton";
import UCLASCarBox from "./components/UCLASCarBox";
import UCLASCarBoxButton from "./components/UCLASCarBoxButton";
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
          <Route path="GameOneTableUCLA" element={<GameOneTableUCLA />} />
          <Route path="LinkButton" element={<LinkButton />} />
          <Route path="UCLALinkButton" element={<UCLALinkButton />} />
          <Route path="TexasPurdueBoxButton" element={<TexasPurdueBoxButton />} />
          <Route path="TexasPurdueBox" element={<TexasPurdueBox />} />
          <Route path="UCLASCarBoxButton" element={<UCLASCarBoxButton />} />
          <Route path="UCLASCarBox" element={<UCLASCarBox />} />
          <Route path="Wooden" element={<Wooden />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
