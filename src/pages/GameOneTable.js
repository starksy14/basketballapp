import { schedulePurdue } from "./pages/Purdue";
import { scheduleUCLA } from "./pages/UCLA";
import Washington from "./pages/Washington";
import VCU from "./pages/VCU";
import SanJoseState from "./pages/SanJoseState";
import { schedulePenn } from "./pages/Penn";
import PortlandState from "./pages/PortlandState";
import { scheduleNortheastern } from "./pages/Northeastern";
import Evansville from "./pages/Evansville";
import { scheduleMarist } from "./pages/Marist";
import WilliamMary from "./pages/WilliamMary";
import DelawareState from "./pages/DelawareState";

export default function GameOneTable() {
  return (
  <div>
  <h1>Wooden Schedule: Game 1</h1>
   <div className="App">
      <table>
          <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            <th>Age</th>
              <th>Gender</th>
              <th>Gender</th>
          </tr>
          <tr>
              <td>Texas</td>
              <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam6)}</td>
              <td>Male</td>
            <td>Anom</td>
              <td>19</td>
              <td>Male</td>
          </tr>
          <tr>
              <td>Megha</td>
              <td>19</td>
              <td>Female</td>
            <td>Megha</td>
              <td>19</td>
              <td>Female</td>
          </tr>
          <tr>
              <td>Subham</td>
              <td>25</td>
              <td>Male</td>
            <td>Subham</td>
              <td>25</td>
              <td>Male</td>
          </tr>
      </table>
  </div>
    </div>
  );
  }
   
