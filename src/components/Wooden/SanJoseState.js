import {generateSanJoseStateNames, SanJoseStateComponent} from './SanJoseStateNames';
import LinkButton from './LinkButton';

const scheduleSanJoseSt = [
  {
    SanJoseTeam1: "Abilene Christian",
    SanJoseTeam2: "@Belmont",
    SanJoseTeam3: "@Southeastern Louisiana",
    SanJoseTeam4: "Prairie View A&M",
    SanJoseTeam5: "Quinnipiac",
    SanJoseTeam6: "Marist",
    SanJoseTeam7: "Evansville",
    SanJoseTeam8: "Northeastern",
    SanJoseTeam9: "Purdue",
    SanJoseTeam10: "VCU",
    SanJoseTeam11: "Delaware State",
    SanJoseTeam12: "William & Mary",
    SanJoseTeam13: "Penn",
    SanJoseTeam14: "Portland State",
    SanJoseTeam15: "Washington",
    SanJoseTeam16: "UCLA",
    SanJoseTeam17: "@Marist",
    SanJoseTeam18: "@Evansville",
    SanJoseTeam19: "@Northeastern",
    SanJoseTeam20: "@Purdue",
    SanJoseTeam21: "@VCU",
    SanJoseTeam22: "@Delaware State",
    SanJoseTeam23: "@William & Mary",
    SanJoseTeam24: "@Penn",
    SanJoseTeam25: "@Portland State",
    SanJoseTeam26: "@Washington",
    SanJoseTeam27: "@UCLA",
  },
];

const SanJoseStSchedule = () => {
   
    return (
      <>
        <div>
        <center><h1>San Jose State schedule</h1></center>
  
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
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam1)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam2)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam3)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam4)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam5)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam6)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam7)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam8)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam9)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam10)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam11)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam12)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam13)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam14)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam15)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam16)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam17)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam18)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam19)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam20)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam21)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam22)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam23)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam24)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam25)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam26)}</h2>
                <h2>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam27)}</h2>
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
              <h2><SanJoseStateComponent generateSanJoseStateNames={generateSanJoseStateNames} /></h2>

              </div>
            </div>
          </div>
        </div>
        <br></br>
      <center><LinkButton /></center>
      </>
    );
  };
  export default SanJoseStSchedule;
  