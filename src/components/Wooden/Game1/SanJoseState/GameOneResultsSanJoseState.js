import { schedulePurdue } from '../Purdue/Purdue';
import { scheduleUCLA } from '../UCLA/UCLA';
import AbileneSanJoseBoxButton from '../AbileneChristian/AbileneSanJoseBoxButton';


export default function GameOneTable() {
  return (
    <div>
      <center>
  <center><strong><h1>Wooden Schedule: Game 1</h1></strong></center>

  <div class="items-wrap container">
	<div class="items-col">
          <h4>Team</h4>
              <p>Texas</p>
              <p>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam6)}</p>
              <p>Stephen F. Austin</p>
              <p>Hawaii</p>
              <p>Abilene Christian</p>
              <p>Northern Illinois</p>
              <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam21)}</p>
              <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam20)}</p>
              <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam25)}</p>
              <p>Lamar</p>
              <p>Buffalo</p>
              <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam18)}</p>
            </div>
          
          <div class="items-col">
          <h4>Opponent</h4>
          <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam6)}</p>
              <p>@South Carolina</p>
              <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam12)}</p>
              <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam11)}</p>
              <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam16)}</p>
              <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam15)}</p>
              <p>@Bryant</p>
              <p>@Ball State</p>
              <p>@Nicholls State</p>
              <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam13)}</p>
              <p>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam8)}</p>
              <p>@Houston</p>
          </div>
        
	<div class="items-col">
  <h4>Result</h4>
              <p>Game 1</p>
              <p>Game 2</p>
              <p>Game 3</p>
              <p>Game 4</p>
              <p>Game 5</p>
              <p>Game 6</p>
              <p>Game 7</p>
              <p>Game 8</p>
              <p>Game 9</p>
              <p>Game 10</p>
              <p>Game 11</p>
              <p>Game 12</p>
            </div>
        <div class="items-col">
        <h4>Standings</h4>
              <p>Game 1</p>
              <p>Game 2</p>
              <p>Game 3</p>
              <p>Game 4</p>
              <p>Game 5</p>
              <p>Game 6</p>
              <p>Game 7</p>
              <p>Game 8</p>
              <p>Game 9</p>
              <p>Game 10</p>
              <p>Game 11</p>
              <p>Game 12</p>
            </div>
        <div class="items-col">
        <h4>W</h4>
              <p>Game 1</p>
              <p>Game 2</p>
              <p>Game 3</p>
              <p>Game 4</p>
              <p>Game 5</p>
              <p>Game 6</p>
              <p>Game 7</p>
              <p>Game 8</p>
              <p>Game 9</p>
              <p>Game 10</p>
              <p>Game 11</p>
              <p>Game 12</p>
            </div>
        <div class="items-col">
        <h4>L</h4>
              <p>Game 1</p>
              <p>Game 2</p>
              <p>Game 3</p>
              <p>Game 4</p>
              <p>Game 5</p>
              <p>Game 6</p>
              <p>Game 7</p>
              <p>Game 8</p>
              <p>Game 9</p>
              <p>Game 10</p>
              <p>Game 11</p>
              <p>Game 12</p>
            </div>
            <br></br>
        </div>
        </center>
      <center><AbileneSanJoseBoxButton /></center>
        </div>

);
};
