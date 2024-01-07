import { schedulePurdue } from './pages/Purdue';
import { scheduleUCLA } from './pages/UCLA';

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
              <td>Hawaii</td>
              <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam11)}</td>
              <td>Female</td>
              <td>Female</td>
          </tr>
          <tr>
              <td>Abilene Christian</td>
              <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam16)}</td>
            <td>Northern Illinois</td>
            <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam15)}</td>
            <td>Male</td>
              <td>Male</td>
          </tr>
          <tr>
          <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam21)}</td>
              <td>@Bryant</td>
              <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam20)}</td>
            <td>@Ball State</td>
              <td>19</td>
              <td>Male</td>
          </tr>
          <tr>
          <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam25)}</td>
              <td>@Nicholls State</td>
            <td>Lamar</td>
            <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam13)}</td>
            <td>Female</td>
              <td>Female</td>
          </tr>
          <tr>
              <td>Buffalo</td>
              <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam8)}</td>
              <td>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam7)}</td>
            <td>@Houston</td>
              <td>Male</td>
              <td>Male</td>
          </tr>
      </table>
  </div>
    </div>
  );
  }
   
