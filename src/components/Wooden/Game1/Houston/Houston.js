import {generateHoustonNames, HoustonComponent} from './HoustonNames';
import HoustonLinkButton from '../Houston/HoustonLinkButton';

const scheduleHouston = [
  {
    HoustonTeam1: "Lamar",
    HoustonTeam2: "Florida A&M",
    HoustonTeam3: "@Arizona",
    HoustonTeam4: "@Miami (Fla.)",
    HoustonTeam5: "@UCF",
    HoustonTeam6: "@San Jose State",
    HoustonTeam7: "@VCU",
    HoustonTeam8: "@Washington",
    HoustonTeam9: "@William & Mary",
    HoustonTeam10: "@Purdue",
    HoustonTeam11: "@Penn",
    HoustonTeam12: "@Portland State",
    HoustonTeam13: "@UCLA",
    HoustonTeam14: "@Delaware State",
    HoustonTeam15: "@Evansville",
    HoustonTeam16: "@Northeastern",
    HoustonTeam17: "San Jose State",
    HoustonTeam18: "VCU",
    HoustonTeam19: "Washington",
    HoustonTeam20: "William & Mary",
    HoustonTeam21: "Purdue",
    HoustonTeam22: "Penn",
    HoustonTeam23: "Portland State",
    HoustonTeam24: "UCLA",
    HoustonTeam25: "Delaware State",
    HoustonTeam26: "Evansville",
    HoustonTeam27: "Northeastern",
  },
];


const HoustonSchedule = () => {
  
  return (
    <>
      <div>
      <center><h1>Houston schedule</h1></center>

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
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam1)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam2)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam3)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam4)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam5)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam6)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam7)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam8)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam9)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam10)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam11)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam12)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam13)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam14)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam15)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam16)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam17)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam18)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam19)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam20)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam21)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam22)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam23)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam24)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam25)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam26)}</h2>
              <h2>{scheduleHouston.map((scheduleHouston) => scheduleHouston.HoustonTeam27)}</h2>
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
            <h2><HoustonComponent generateHoustonNames={generateHoustonNames} /></h2>

            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center><HoustonLinkButton /></center>
    </>
  );
};
export default HoustonSchedule;
