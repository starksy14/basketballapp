import {generateEvansvilleNames, EvansvilleComponent} from './EvansvilleNames';
import LinkButton from './LinkButton';

const scheduleEvansville = [
  {
    EvansvilleTeam1: "@Nicholls State",
    EvansvilleTeam2: "Albany",
    EvansvilleTeam3: "Army",
    EvansvilleTeam4: "@Alabama",
    EvansvilleTeam5: "@Cincinnati",
    EvansvilleTeam6: "Portland State",
    EvansvilleTeam7: "San Jose State",
    EvansvilleTeam8: "VCU",
    EvansvilleTeam9: "Delaware State",
    EvansvilleTeam10: "William & Mary",
    EvansvilleTeam11: "Northeastern",
    EvansvilleTeam12: "Penn",
    EvansvilleTeam13: "Washington",
    EvansvilleTeam14: "UCLA",
    EvansvilleTeam15: "Marist",
    EvansvilleTeam16: "Purdue",
    EvansvilleTeam17: "@Portland State",
    EvansvilleTeam18: "@San Jose State",
    EvansvilleTeam19: "@VCU",
    EvansvilleTeam20: "@Delaware State",
    EvansvilleTeam21: "@William & Mary",
    EvansvilleTeam22: "@Northeastern",
    EvansvilleTeam23: "@Penn",
    EvansvilleTeam24: "@Washington",
    EvansvilleTeam25: "@UCLA",
    EvansvilleTeam26: "@Marist",
    EvansvilleTeam27: "@Purdue",
  },
];


const EvansvilleSchedule = () => {
  
  return (
    <>
      <div>
      <center><h1>Evansville schedule</h1></center>

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
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam1)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam2)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam3)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam4)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam5)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam6)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam7)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam8)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam9)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam10)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam11)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam12)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam13)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam14)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam15)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam16)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam17)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam18)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam19)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam20)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam21)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam22)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam23)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam24)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam25)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam26)}</h2>
              <h2>{scheduleEvansville.map((scheduleEvansville) => scheduleEvansville.EvansvilleTeam27)}</h2>
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
            <h2><EvansvilleComponent generateEvansvilleNames={generateEvansvilleNames} /></h2>

            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center><LinkButton /></center>
    </>
  );
};
export default EvansvilleSchedule;
