import {generateDelawareStateNames, DelawareStateComponent} from './DelawareStateNames';
import DelawareStateLinkButton from './DelawareStateLinkButton';
const scheduleDelawareState = [
  {
    DelawareStateTeam1: "@Houston",
    DelawareStateTeam2: "@Xavier",
    DelawareStateTeam3: "@Dayton",
    DelawareStateTeam4: "@Louisiana Tech",
    DelawareStateTeam5: "@Mississippi",
    DelawareStateTeam6: "@Washington",
    DelawareStateTeam7: "@UCLA",
    DelawareStateTeam8: "@Purdue",
    DelawareStateTeam9: "@Evansville",
    DelawareStateTeam10: "@Northeastern",
    DelawareStateTeam11: "@San Jose State",
    DelawareStateTeam12: "@VCU",
    DelawareStateTeam13: "@William & Mary",
    DelawareStateTeam14: "@Marist",
    DelawareStateTeam15: "@Penn",
    DelawareStateTeam16: "@Portland State",
    DelawareStateTeam17: "Washington",
    DelawareStateTeam18: "UCLA",
    DelawareStateTeam19: "Purdue",
    DelawareStateTeam20: "Evansville",
    DelawareStateTeam21: "Northeastern",
    DelawareStateTeam22: "San Jose State",
    DelawareStateTeam23: "VCU",
    DelawareStateTeam24: "William & Mary",
    DelawareStateTeam25: "Marist",
    DelawareStateTeam26: "Penn",
    DelawareStateTeam27: "Portland State",
  },
];

const DelawareStateSchedule = () => {
  
  return (
    <>
      <div>
      <center><h1>Delaware State schedule</h1></center>

        <div className="grid-container">
          <div className="col-sm">
            <h4>Game</h4>
            <div className="row">
              <div className="col-sm">
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
                <h2>Game 13</h2>
                <h2>Game 14</h2>
                <h2>Game 15</h2>
                <h2>Game 16</h2>
                <h2>Game 17</h2>
                <h2>Game 18</h2>
                <h2>Game 19</h2>
                <h2>Game 20</h2>
                <h2>Game 21</h2>
                <h2>Game 22</h2>
                <h2>Game 23</h2>
                <h2>Game 24</h2>
                <h2>Game 25</h2>
                <h2>Game 26</h2>
                <h2>Game 27</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <h4>Opponent</h4>
            <div className="col-sm">
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam1)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam2)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam3)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam4)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam5)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam6)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam7)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam8)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam9)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam10)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam11)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam12)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam13)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam14)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam15)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam16)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam17)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam18)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam19)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam20)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam21)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam22)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam23)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam24)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam25)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam26)}</h2>
              <h2>{scheduleDelawareState.map((scheduleDelawareState) => scheduleDelawareState.DelawareStateTeam27)}</h2>
            </div>
          </div>
          <div className="row">
            <h4>Result</h4>
            <div className="col-sm">
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
                <h2>Game 13</h2>
                <h2>Game 14</h2>
                <h2>Game 15</h2>
                <h2>Game 16</h2>
                <h2>Game 17</h2>
                <h2>Game 18</h2>
                <h2>Game 19</h2>
                <h2>Game 20</h2>
                <h2>Game 21</h2>
                <h2>Game 22</h2>
                <h2>Game 23</h2>
                <h2>Game 24</h2>
                <h2>Game 25</h2>
                <h2>Game 26</h2>
                <h2>Game 27</h2>
              </div>
          </div>
          <div className="row">
            <h4>Record</h4>
             <div className="col-sm">
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
                <h2>Game 13</h2>
                <h2>Game 14</h2>
                <h2>Game 15</h2>
                <h2>Game 16</h2>
                <h2>Game 17</h2>
                <h2>Game 18</h2>
                <h2>Game 19</h2>
                <h2>Game 20</h2>
                <h2>Game 21</h2>
                <h2>Game 22</h2>
                <h2>Game 23</h2>
                <h2>Game 24</h2>
                <h2>Game 25</h2>
                <h2>Game 26</h2>
                <h2>Game 27</h2>
              </div>
          </div>
          <div className="row">
            <div className="col-sm">
            <h4>Team roster</h4>
            <h2><DelawareStateComponent generateDelawareStateNames={generateDelawareStateNames} /></h2>

            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center><DelawareStateLinkButton /></center>
    </>
  );
};
export default DelawareStateSchedule;
