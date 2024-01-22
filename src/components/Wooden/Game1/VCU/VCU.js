import {generateVCUNames, VCUComponent} from './VCUNames';
import VCULinkButton from './VCULinkButton';

const scheduleVCU = [
  {
    VCUTeam1: "Hawaii",
    VCUTeam2: "@Saint Louis",
    VCUTeam3: "@Utah Valley",
    VCUTeam4: "Eastern Kentucky",
    VCUTeam5: "Northern Arizona",
    VCUTeam6: "@William & Mary",
    VCUTeam7: "@Marist",
    VCUTeam8: "@Evansville",
    VCUTeam9: "@Portland State",
    VCUTeam10: "@San Jose State",
    VCUTeam11: "@UCLA",
    VCUTeam12: "@Delaware State",
    VCUTeam13: "@Northeastern",
    VCUTeam14: "@Penn",
    VCUTeam15: "@Purdue",
    VCUTeam16: "@Washington",
    VCUTeam17: "William & Mary",
    VCUTeam18: "Marist",
    VCUTeam19: "Evansville",
    VCUTeam20: "Portland State",
    VCUTeam21: "San Jose State",
    VCUTeam22: "UCLA",
    VCUTeam23: "Delaware State",
    VCUTeam24: "Northeastern",
    VCUTeam25: "Penn",
    VCUTeam26: "Purdue",
    VCUTeam27: "Washington",
  },
];


const VCUSchedule = () => {
   
    return (
      <>
        <div>
        <center><h1>VCU schedule</h1></center>
  
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
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam1)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam2)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam3)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam4)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam5)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam6)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam7)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam8)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam9)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam10)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam11)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam12)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam13)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam14)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam15)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam16)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam17)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam18)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam19)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam20)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam21)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam22)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam23)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam24)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam25)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam26)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam27)}</h2>
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
              <h2><VCUComponent generateVCUNames={generateVCUNames} /></h2>

              </div>
            </div>
          </div>
        </div>
        <br></br>
      <center><VCULinkButton /></center>
      </>
    );
  };
  export default VCUSchedule;
  