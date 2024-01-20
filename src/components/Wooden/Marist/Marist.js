import {generateMaristNames, MaristComponent} from './MaristNames';
import LinkButton from '../Purdue/LinkButton';

const scheduleMarist = [
  {
    MaristTeam1: "Lamar",
    MaristTeam2: "Florida A&M",
    MaristTeam3: "@Arizona",
    MaristTeam4: "@Miami (Fla.)",
    MaristTeam5: "@UCF",
    MaristTeam6: "@San Jose State",
    MaristTeam7: "@VCU",
    MaristTeam8: "@Washington",
    MaristTeam9: "@William & Mary",
    MaristTeam10: "@Purdue",
    MaristTeam11: "@Penn",
    MaristTeam12: "@Portland State",
    MaristTeam13: "@UCLA",
    MaristTeam14: "@Delaware State",
    MaristTeam15: "@Evansville",
    MaristTeam16: "@Northeastern",
    MaristTeam17: "San Jose State",
    MaristTeam18: "VCU",
    MaristTeam19: "Washington",
    MaristTeam20: "William & Mary",
    MaristTeam21: "Purdue",
    MaristTeam22: "Penn",
    MaristTeam23: "Portland State",
    MaristTeam24: "UCLA",
    MaristTeam25: "Delaware State",
    MaristTeam26: "Evansville",
    MaristTeam27: "Northeastern",
  },
];


const MaristSchedule = () => {
  
  return (
    <>
      <div>
      <center><h1>Marist schedule</h1></center>

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
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam1)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam2)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam3)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam4)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam5)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam6)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam7)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam8)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam9)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam10)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam11)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam12)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam13)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam14)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam15)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam16)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam17)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam18)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam19)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam20)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam21)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam22)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam23)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam24)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam25)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam26)}</h2>
              <h2>{scheduleMarist.map((scheduleMarist) => scheduleMarist.MaristTeam27)}</h2>
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
            <h2><MaristComponent generateMaristNames={generateMaristNames} /></h2>

            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center><LinkButton /></center>
    </>
  );
};
export default MaristSchedule;
