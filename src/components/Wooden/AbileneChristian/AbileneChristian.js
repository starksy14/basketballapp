import {generateAbileneChristianNames, AbileneChristianComponent} from './AbileneChristianNames';
import AbileneChristianLinkButton from './AbileneChristianLinkButton';

const scheduleAbileneChristian = [
  {
    AbileneChristianTeam1: "@Nicholls State",
    AbileneChristianTeam2: "Albany",
    AbileneChristianTeam3: "Army",
    AbileneChristianTeam4: "@Alabama",
    AbileneChristianTeam5: "@Cincinnati",
    AbileneChristianTeam6: "Portland State",
    AbileneChristianTeam7: "San Jose State",
    AbileneChristianTeam8: "VCU",
    AbileneChristianTeam9: "Delaware State",
    AbileneChristianTeam10: "William & Mary",
    AbileneChristianTeam11: "Northeastern",
    AbileneChristianTeam12: "Penn",
    AbileneChristianTeam13: "Washington",
    AbileneChristianTeam14: "UCLA",
    AbileneChristianTeam15: "Marist",
    AbileneChristianTeam16: "Purdue",
    AbileneChristianTeam17: "@Portland State",
    AbileneChristianTeam18: "@San Jose State",
    AbileneChristianTeam19: "@VCU",
    AbileneChristianTeam20: "@Delaware State",
    AbileneChristianTeam21: "@William & Mary",
    AbileneChristianTeam22: "@Northeastern",
    AbileneChristianTeam23: "@Penn",
    AbileneChristianTeam24: "@Washington",
    AbileneChristianTeam25: "@UCLA",
    AbileneChristianTeam26: "@Marist",
    AbileneChristianTeam27: "@Purdue",
  },
];


const AbileneChristianSchedule = () => {
  
  return (
    <>
      <div>
      <center><h1>AbileneChristian schedule</h1></center>

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
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam1)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam2)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam3)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam4)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam5)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam6)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam7)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam8)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam9)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam10)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam11)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam12)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam13)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam14)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam15)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam16)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam17)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam18)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam19)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam20)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam21)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam22)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam23)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam24)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam25)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam26)}</h2>
              <h2>{scheduleAbileneChristian.map((scheduleAbileneChristian) => scheduleAbileneChristian.AbileneChristianTeam27)}</h2>
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
            <h2><AbileneChristianComponent generateAbileneChristianNames={generateAbileneChristianNames} /></h2>

            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center><AbileneChristianLinkButton /></center>
    </>
  );
};
export default AbileneChristianSchedule;
