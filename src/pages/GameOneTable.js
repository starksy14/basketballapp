import { schedulePurdue } from "./pages/Purdue";
import { scheduleUCLA } from "./pages/UCLA";

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
              <td>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam6)}</td>
            <td>@South Carolina</td>
              <td>19</td>
              <td>Male</td>
          </tr>
          <tr>
              <td>Stephen F. Austin</td>
              <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam12)}</td>
              <td>Female</td>
            <td>Hawaii</td>
            <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam11)}</td>
              <td>Female</td>
          </tr>
          <tr>
              <td>Abilene Christian</td>
              <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam16)}</td>
              <td>Male</td>
            <td>Northern Illinois</td>
            <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam15)}</td>
              <td>Male</td>
          </tr>
      </table>
  </div>
    </div>
  );
  }
   
