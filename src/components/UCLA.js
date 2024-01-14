import {generateUCLANames, UCLAComponent} from './UCLANames';
import LinkButton from './LinkButton';

export const scheduleUCLA = [
  {
    UCLATeam1: "@South Carolina",
    UCLATeam2: "UAB",
    UCLATeam3: "George Mason",
    UCLATeam4: "@Fresno State",
    UCLATeam5: "Oral Roberts",
    UCLATeam6: "@Purdue",
    UCLATeam7: "@Delaware State",
    UCLATeam8: "@William & Mary",
    UCLATeam9: "@Northeastern",
    UCLATeam10: "@Penn",
    UCLATeam11: "@VCU",
    UCLATeam12: "@Washington",
    UCLATeam13: "@Marist",
    UCLATeam14: "@Evansville",
    UCLATeam15: "@Portland State",
    UCLATeam16: "@San Jose State",
    UCLATeam17: "Purdue",
    UCLATeam18: "Delaware State",
    UCLATeam19: "William & Mary",
    UCLATeam20: "Northeastern",
    UCLATeam21: "Penn",
    UCLATeam22: "VCU",
    UCLATeam23: "Washington",
    UCLATeam24: "Marist",
    UCLATeam25: "Evansville",
    UCLATeam26: "Portland State",
    UCLATeam27: "San Jose State",
  },
];

function UCLAschedule () {  
    
  
    return (
      <>
        <div>
        <h1>UCLA schedule</h1>
  
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
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam1)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam2)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam3)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam4)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam5)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam6)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam7)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam8)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam9)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam10)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam11)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam12)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam13)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam14)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam15)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam16)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam17)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam18)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam19)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam20)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam21)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam22)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam23)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam24)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam25)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam26)}</h2>
                <h2>{scheduleUCLA.map((scheduleUCLA) => scheduleUCLA.UCLATeam27)}</h2>
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
              <h2><UCLAComponent generateUCLANames={generateUCLANames} /></h2>

              </div>
            </div>
          </div>
        </div>
        <br></br>
      <center><LinkButton /></center>
      </>
    );
  };
  export default UCLAschedule;
  