import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Wooden from "./components/Wooden/Wooden";
import Purdue from "./components/Wooden/Purdue";
import UCLA from "./components/Wooden/UCLA";
import Washington from "./components/Wooden/Washington";
import VCU from "./components/Wooden/VCU";
import SanJoseState from "./components/Wooden/SanJoseState";
import Penn from "./components/Wooden/Penn";
import PortlandState from "./components/Wooden/PortlandState";
import Northeastern from "./components/Wooden/Northeastern";
import Evansville from "./components/Wooden/Evansville";
import Marist from "./components/Wooden/Marist";
import WilliamMary from "./components/Wooden/WilliamMary";
import DelawareState from "./components/Wooden/DelawareState";
import GameOneTable from "./components/Wooden/GameOneTable";
import GameOneTableUCLA from "./components/Wooden/GameOneTableUCLA";
import GameOneTableWashington from "./components/Wooden/GameOneTableWashington";
import LinkButton from "./components/Wooden/LinkButton";
import UCLALinkButton from "./components/Wooden/UCLALinkButton";
import TexasPurdueBox from "./components/Wooden/TexasPurdueBox";
import SFAustinWashBox from "./components/Wooden/SFAustinWashBox";
import TexasPurdueBoxButton from "./components/Wooden/TexasPurdueBoxButton";
import UCLASCarBox from "./components/Wooden/UCLASCarBox";
import UCLASCarBoxButton from "./components/Wooden/UCLASCarBoxButton";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Layout />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Wooden/UCLA" element={<UCLA />} />
          <Route path="Wooden/Purdue" element={<Purdue />} />
          <Route path="Wooden/Washington" element={<Washington />} />
          <Route path="Wooden/VCU" element={<VCU />} />
          <Route path="Wooden/SanJoseState" element={<SanJoseState />} />
          <Route path="Wooden/Penn" element={<Penn />} />
          <Route path="Wooden/PortlandState" element={<PortlandState />} />
          <Route path="Wooden/Northeastern" element={<Northeastern />} />
          <Route path="Wooden/Evansville" element={<Evansville />} />
          <Route path="Wooden/Marist" element={<Marist />} />
          <Route path="Wooden/WilliamMary" element={<WilliamMary />} />
          <Route path="Wooden/DelawareState" element={<DelawareState />} />
          <Route path="Wooden/GameOneTable" element={<GameOneTable />} />
          <Route path="Wooden/GameOneTableUCLA" element={<GameOneTableUCLA />} />
          <Route path="Wooden/GameOneTableWashington" element={<GameOneTableWashington />} />
          <Route path="Wooden/LinkButton" element={<LinkButton />} />
          <Route path="Wooden/UCLALinkButton" element={<UCLALinkButton />} />
          <Route path="Wooden/TexasPurdueBoxButton" element={<TexasPurdueBoxButton />} />
          <Route path="Wooden/TexasPurdueBox" element={<TexasPurdueBox />} />
          <Route path="Wooden/UCLASCarBoxButton" element={<UCLASCarBoxButton />} />
          <Route path="Wooden/UCLASCarBox" element={<UCLASCarBox />} />
          <Route path="Wooden/SFAustinWashBox" element={<SFAustinWashBox />} />
          <Route path="Wooden/Wooden" element={<Wooden />} />
      </Routes>
    </BrowserRouter>
  );
}
