import {generateDelawareStNames, DelawareStComponent} from './DelawareStateNames';
import LinkButton from '../Purdue/LinkButton';

const scheduleDelawareSt = [
  {
    DelawareStTeam1: "@Houston",
    DelawareStTeam2: "@Xavier",
    DelawareStTeam3: "@Dayton",
    DelawareStTeam4: "@Louisiana Tech",
    DelawareStTeam5: "@Mississippi",
    DelawareStTeam6: "@Washington",
    DelawareStTeam7: "@UCLA",
    DelawareStTeam8: "@Purdue",
    DelawareStTeam9: "@Evansville",
    DelawareStTeam10: "@Northeastern",
    DelawareStTeam11: "@San Jose State",
    DelawareStTeam12: "@VCU",
    DelawareStTeam13: "@William & Mary",
    DelawareStTeam14: "@Marist",
    DelawareStTeam15: "@Penn",
    DelawareStTeam16: "@Portland State",
    DelawareStTeam17: "Washington",
    DelawareStTeam18: "UCLA",
    DelawareStTeam19: "Purdue",
    DelawareStTeam20: "Evansville",
    DelawareStTeam21: "Northeastern",
    DelawareStTeam22: "San Jose State",
    DelawareStTeam23: "VCU",
    DelawareStTeam24: "William & Mary",
    DelawareStTeam25: "Marist",
    DelawareStTeam26: "Penn",
    DelawareStTeam27: "Portland State",
  },
];

const DelawareStSchedule = () => {
  
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
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam1)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam2)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam3)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam4)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam5)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam6)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam7)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam8)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam9)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam10)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam11)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam12)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam13)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam14)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam15)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam16)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam17)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam18)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam19)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam20)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam21)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam22)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam23)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam24)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam25)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam26)}</h2>
              <h2>{scheduleDelawareSt.map((scheduleDelawareSt) => scheduleDelawareSt.DelawareStTeam27)}</h2>
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
            <h2><DelawareStComponent generateDelawareStNames={generateDelawareStNames} /></h2>

            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center><LinkButton /></center>
    </>
  );
};
export default DelawareStSchedule;
