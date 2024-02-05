import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Wooden from "./components/Wooden/Wooden";
import Purdue from "./components/Wooden/Game1/Purdue/Purdue";
import UCLA from "./components/Wooden/Game1/UCLA/UCLA";
import Washington from "./components/Wooden/Game1/Washington/Washington";
import VCU from "./components/Wooden/Game1/VCU/VCU";
import SanJoseState from "./components/Wooden/Game1/SanJoseState/SanJoseState";
import Penn from "./components/Wooden/Game1/Penn/Penn";
import PortlandState from "./components/Wooden/Game1/PortlandState/PortlandState";
import Northeastern from "./components/Wooden/Game1/Northeastern/Northeastern";
import Evansville from "./components/Wooden/Game1/Evansville/Evansville";
import Marist from "./components/Wooden/Game1/Marist/Marist";
import WilliamMary from "./components/Wooden/Game1/WilliamMary/WilliamMary";
import DelawareState from "./components/Wooden/Game1/DelawareState/DelawareState";
import GameOneTable from "./components/Wooden/Game1/Purdue/GameOneTable";
import GameOneTableUCLA from "./components/Wooden/Game1/UCLA/GameOneTableUCLA";
import GameOneTableWashington from "./components/Wooden/Game1/Washington/GameOneTableWashington";
import GameOneTableVCU from "./components/Wooden/Game1/VCU/GameOneTableVCU";
import GameOneTableSanJoseState from "./components/Wooden/Game1/SanJoseState/GameOneTableSanJoseState";
import GameOneTablePortlandState from "./components/Wooden/Game1/PortlandState/GameOneTablePortlandState";
import GameOneTablePenn from "./components/Wooden/Game1/Penn/GameOneTablePenn";
import GameOneTableNortheastern from "./components/Wooden/Game1/Northeastern/GameOneTableNortheastern";
import GameOneTableEvansville from "./components/Wooden/Game1/Evansville/GameOneTableEvansville";
import GameOneTableMarist from "./components/Wooden/Game1/Marist/GameOneTableMarist";
import GameOneTableWilliamMary from "./components/Wooden/Game1/WilliamMary/GameOneTableWilliamMary";
import GameOneTableDelawareState from "./components/Wooden/Game1/DelawareState/GameOneTableDelawareState";
import LinkButton from "./components/Wooden/Game1/Purdue/LinkButton";
import UCLALinkButton from "./components/Wooden/Game1/UCLA/UCLALinkButton";
import TexasPurdueBox from "./components/Wooden/Game1/Texas/TexasPurdueBox";
import SFAustinWashBox from "./components/Wooden/Game1/SFAustin/SFAustinWashBox";
import TexasPurdueBoxButton from "./components/Wooden/Game1/Texas/TexasPurdueBoxButton";
import UCLASCarBox from "./components/Wooden/Game1/UCLA/UCLASCarBox";
import HawaiiVCUBox from "./components/Wooden/Game1/Hawaii/HawaiiVCUBox";
import AbileneSanJoseBox from "./components/Wooden/Game1/AbileneChristian/AbileneSanJoseBox";
import NIUPortlandStateBox from "./components/Wooden/Game1/NorthernIllinois/NIUPortlandStateBox";
import PennBryantBox from "./components/Wooden/Game1/Penn/PennBryantBox";
import NortheasternBallStateBox from "./components/Wooden/Game1/Northeastern/NortheasternBallStateBox";
import EvansvilleNichollsStateBox from "./components/Wooden/Game1/Evansville/EvansvilleNichollsStateBox";
import LamarMaristBox from "./components/Wooden/Game1/Lamar/LamarMaristBox";
import BuffaloWilliamMaryBox from "./components/Wooden/Game1/WilliamMary/BuffaloWilliamMaryBox";
import DelawareStateHoustonBox from "./components/Wooden/Game1/DelawareState/DelawareStateHoustonBox";
import UCLASCarBoxButton from "./components/Wooden/Game1/UCLA/UCLASCarBoxButton";
import AbileneChristianBox from './components/Wooden/Game1/AbileneChristian/AbileneChristianBox';
import GameOneResultsSanJoseState from "./components/Wooden/Game1/SanJoseState/GameOneResultsSanJoseState";

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
          <Route path="Wooden/GameOneTableVCU" element={<GameOneTableVCU />} />
          <Route path="Wooden/GameOneTableSanJoseState" element={<GameOneTableSanJoseState />} />
          <Route path="Wooden/GameOneResultsSanJoseState" element={<GameOneResultsSanJoseState />} />
          <Route path="Wooden/GameOneTablePortlandState" element={<GameOneTablePortlandState />} />
          <Route path="Wooden/GameOneTablePenn" element={<GameOneTablePenn />} />
          <Route path="Wooden/GameOneTableNortheastern" element={<GameOneTableNortheastern />} />
          <Route path="Wooden/GameOneTableEvansville" element={<GameOneTableEvansville />} />
          <Route path="Wooden/GameOneTableMarist" element={<GameOneTableMarist />} />
          <Route path="Wooden/GameOneTableWilliamMary" element={<GameOneTableWilliamMary />} />
          <Route path="Wooden/GameOneTableDelawareState" element={<GameOneTableDelawareState />} />
          <Route path="Wooden/LinkButton" element={<LinkButton />} />
          <Route path="Wooden/UCLALinkButton" element={<UCLALinkButton />} />
          <Route path="Wooden/TexasPurdueBoxButton" element={<TexasPurdueBoxButton />} />
          <Route path="Wooden/TexasPurdueBox" element={<TexasPurdueBox />} />
          <Route path="Wooden/UCLASCarBoxButton" element={<UCLASCarBoxButton />} />
          <Route path="Wooden/UCLASCarBox" element={<UCLASCarBox />} />
          <Route path="Wooden/HawaiiVCUBox" element={<HawaiiVCUBox />} />
          <Route path="Wooden/SFAustinWashBox" element={<SFAustinWashBox />} />
          <Route path="Wooden/AbileneSanJoseBox" element={<AbileneSanJoseBox />} />
          <Route path="Wooden/NIUPortlandStateBox" element={<NIUPortlandStateBox />} />
          <Route path="Wooden/PennBryantBox" element={<PennBryantBox />} />
          <Route path="Wooden/NortheasternBallStateBox" element={<NortheasternBallStateBox />} />
          <Route path="Wooden/EvansvilleNichollsStateBox" element={<EvansvilleNichollsStateBox />} />
          <Route path="Wooden/LamarMaristBox" element={<LamarMaristBox />} />
          <Route path="Wooden/BuffaloWilliamMaryBox" element={<BuffaloWilliamMaryBox />} />
          <Route path="Wooden/DelawareStateHoustonBox" element={<DelawareStateHoustonBox />} />
          <Route path="Wooden/AbileneChristianBox" element={<AbileneChristianBox />} />
          <Route path="Wooden/Wooden" element={<Wooden />} />
      </Routes>
    </BrowserRouter>
  );
}
