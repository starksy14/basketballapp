import {generateSanJoseStateNames, SanJoseStateComponent} from './SanJoseStateNames';
import SanJoseStateLinkButton from './SanJoseStateLinkButton';

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
        <center><h1><strong>San Jose State schedule</strong></h1></center>
  
        <div class="items-wrap container">
	<div class="items-col">
              <p>Game</p>
                  <p><strong>Game 1</strong></p>
                  <p>Game 2</p>
                  <p>Game 3</p>
                  <p>Game 4</p>
                  <p>Game 5</p>
                  <p>Game 6</p>
                  <p>Game 7</p>
                  <p>Game 8</p>
                  <p>Game 9</p>
                  <p>Game 10</p>
                  <p>Game 11</p>
                  <p>Game 12</p>
                  <p>Game 13</p>
                  <p>Game 14</p>
                  <p>Game 15</p>
                  <p>Game 16</p>
                  <p>Game 17</p>
                  <p>Game 18</p>
                  <p>Game 19</p>
                  <p>Game 20</p>
                  <p>Game 21</p>
                  <p>Game 22</p>
                  <p>Game 23</p>
                  <p>Game 24</p>
                  <p>Game 25</p>
                  <p>Game 26</p>
                  <p>Game 27</p>
                </div>
            <div class="items-col">
              <p><strong>Opponent</strong></p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam1)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam2)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam3)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam4)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam5)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam6)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam7)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam8)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam9)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam10)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam11)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam12)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam13)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam14)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam15)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam16)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam17)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam18)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam19)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam20)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam21)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam22)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam23)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam24)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam25)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam26)}</p>
                <p>{scheduleSanJoseSt.map((scheduleSanJoseSt) => scheduleSanJoseSt.SanJoseTeam27)}</p>
              </div>
              <div class="items-col">
              <p><strong>Result</strong></p>
                  <p>Game 1</p>
                  <p>Game 2</p>
                  <p>Game 3</p>
                  <p>Game 4</p>
                  <p>Game 5</p>
                  <p>Game 6</p>
                  <p>Game 7</p>
                  <p>Game 8</p>
                  <p>Game 9</p>
                  <p>Game 10</p>
                  <p>Game 11</p>
                  <p>Game 12</p>
                  <p>Game 13</p>
                  <p>Game 14</p>
                  <p>Game 15</p>
                  <p>Game 16</p>
                  <p>Game 17</p>
                  <p>Game 18</p>
                  <p>Game 19</p>
                  <p>Game 20</p>
                  <p>Game 21</p>
                  <p>Game 22</p>
                  <p>Game 23</p>
                  <p>Game 24</p>
                  <p>Game 25</p>
                  <p>Game 26</p>
                  <p>Game 27</p>
                </div>
                <div class="items-col">
              <p><strong>Record</strong></p>
                  <p>Game 1</p>
                  <p>Game 2</p>
                  <p>Game 3</p>
                  <p>Game 4</p>
                  <p>Game 5</p>
                  <p>Game 6</p>
                  <p>Game 7</p>
                  <p>Game 8</p>
                  <p>Game 9</p>
                  <p>Game 10</p>
                  <p>Game 11</p>
                  <p>Game 12</p>
                  <p>Game 13</p>
                  <p>Game 14</p>
                  <p>Game 15</p>
                  <p>Game 16</p>
                  <p>Game 17</p>
                  <p>Game 18</p>
                  <p>Game 19</p>
                  <p>Game 20</p>
                  <p>Game 21</p>
                  <p>Game 22</p>
                  <p>Game 23</p>
                  <p>Game 24</p>
                  <p>Game 25</p>
                  <p>Game 26</p>
                  <p>Game 27</p>
                </div>
                <div class="items-col">
              <p><strong>Team roster</strong></p>
              <p><SanJoseStateComponent generateSanJoseStateNames={generateSanJoseStateNames} /></p>
              </div>
            </div>
        </div>
        <br></br>
      <center><SanJoseStateLinkButton /></center>
      </>
    );
  };
  export default SanJoseStSchedule;
  