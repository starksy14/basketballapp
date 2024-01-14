import {generateWashingtonNames, WashingtonComponent} from './WashingtonNames';
import LinkButton from './LinkButton';

const scheduleWashington = [
  {
    Team1: "Stephen F. Austin",
    Team2: "@Loyola Marymount",
    Team3: "George Washington",
    Team4: "@Cal Baptist",
    Team5: "High Point",
    Team6: "Delaware State",
    Team7: "William & Mary",
    Team8: "Marist",
    Team9: "Penn",
    Team10: "Portland State",
    Team11: "Purdue",
    Team12: "UCLA",
    Team13: "Evansville",
    Team14: "Northeastern",
    Team15: "San Jose State",
    Team16: "VCU",
    Team17: "@Delaware State",
    Team18: "@William & Mary",
    Team19: "@Marist",
    Team20: "@Penn",
    Team21: "@Portland State",
    Team22: "@Purdue",
    Team23: "@UCLA",
    Team24: "@Evansville",
    Team25: "@Northeastern",
    Team26: "@San Jose State",
    Team27: "@VCU",
  },
];


const WashingtonSchedule = () => {
  return (
    <>
      <div>
      <center><h1>Washington schedule</h1></center>

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
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team1)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team2)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team3)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team4)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team5)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team6)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team7)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team8)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team9)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team10)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team11)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team12)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team13)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team14)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team15)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team16)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team17)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team18)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team19)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team20)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team21)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team22)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team23)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team24)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team25)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team26)}</h2>
              <h2>{scheduleWashington.map((scheduleWashington) => scheduleWashington.Team27)}</h2>
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
            <h2><WashingtonComponent generateWashingtonNames={generateWashingtonNames} /></h2>

            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center><LinkButton /></center>
    </>
  );
};
export default WashingtonSchedule;
