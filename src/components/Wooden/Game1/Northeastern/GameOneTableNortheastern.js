import { schedulePurdue } from '../Purdue/Purdue';
import { scheduleUCLA } from '../UCLA/UCLA';
import NortheasternBallStateBoxButton from '../Northeastern/NortheasternBallStateBoxButton';


export default function GameOneTable() {
  return (
    <div>
  <center><h1>Wooden Schedule: Game 1</h1></center>

      <div className="grid-container">
        <div className="col-sm">
          <h4>Team</h4>
          <div className="row">
            <div className="col-sm">
              <h2>Texas</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam6)}</h2>
              <h2>Stephen F. Austin</h2>
              <h2>Hawaii</h2>
              <h2>Abilene Christian</h2>
              <h2>Northern Illinois</h2>
              <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam21)}</h2>
              <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam20)}</h2>
              <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam25)}</h2>
              <h2>Lamar</h2>
              <h2>Buffalo</h2>
              <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam18)}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>Opponent</h4>
          <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam6)}</h2>
              <h2>@South Carolina</h2>
              <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam12)}</h2>
              <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam11)}</h2>
              <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam16)}</h2>
              <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam15)}</h2>
              <h2>@Bryant</h2>
              <h2>@Ball State</h2>
              <h2>@Nicholls State</h2>
              <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam13)}</h2>
              <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam8)}</h2>
              <h2>@Houston</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>Result</h4>
              <h2>Game 1</h2>
              <h2>Game 2</h2>
              <h2>Game 3</h2>
              <h2>Game 4</h2>
              <h2>Game 5</h2>
              <h2>Game 6</h2>
              <h2>Game 7</h2>
              <h2>Game 8</h2>
              <h2>Game 9</h2>
              <h2>Game 10</h2>
              <h2>Game 11</h2>
              <h2>Game 12</h2>
            </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>Standings</h4>
              <h2>Game 1</h2>
              <h2>Game 2</h2>
              <h2>Game 3</h2>
              <h2>Game 4</h2>
              <h2>Game 5</h2>
              <h2>Game 6</h2>
              <h2>Game 7</h2>
              <h2>Game 8</h2>
              <h2>Game 9</h2>
              <h2>Game 10</h2>
              <h2>Game 11</h2>
              <h2>Game 12</h2>
            </div>
        </div>
        <div className="row">
           <div className="col-sm">
           <h4>W</h4>
              <h2>Game 1</h2>
              <h2>Game 2</h2>
              <h2>Game 3</h2>
              <h2>Game 4</h2>
              <h2>Game 5</h2>
              <h2>Game 6</h2>
              <h2>Game 7</h2>
              <h2>Game 8</h2>
              <h2>Game 9</h2>
              <h2>Game 10</h2>
              <h2>Game 11</h2>
              <h2>Game 12</h2>
            </div>
        </div>
        <div className="row">
           <div className="col-sm">
           <h4>L</h4>
              <h2>Game 1</h2>
              <h2>Game 2</h2>
              <h2>Game 3</h2>
              <h2>Game 4</h2>
              <h2>Game 5</h2>
              <h2>Game 6</h2>
              <h2>Game 7</h2>
              <h2>Game 8</h2>
              <h2>Game 9</h2>
              <h2>Game 10</h2>
              <h2>Game 11</h2>
              <h2>Game 12</h2>
            </div>
        </div>
      </div>
      <br></br>
      <center><NortheasternBallStateBoxButton /></center>
    </div>

);
};
