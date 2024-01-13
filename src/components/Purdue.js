import {generatePlayerNames, YourComponent} from './PurdueNames';
import LinkButton from './LinkButton';

export const schedulePurdue = [
  {
    PurdueTeam1: "Texas",
    PurdueTeam2: "Rutgers",
    PurdueTeam3: "@Indiana State",
    PurdueTeam4: "UNLV",
    PurdueTeam5: "@Radford",
    PurdueTeam6: "UCLA",
    PurdueTeam7: "Penn",
    PurdueTeam8: "Delaware State",
    PurdueTeam9: "San Jose State",
    PurdueTeam10: "Marist",
    PurdueTeam11: "Washington",
    PurdueTeam12: "Northeastern",
    PurdueTeam13: "Portland State",
    PurdueTeam14: "William & Mary",
    PurdueTeam15: "VCU",
    PurdueTeam16: "Evansville",
    PurdueTeam17: "@UCLA",
    PurdueTeam18: "@Penn",
    PurdueTeam19: "@Delaware State",
    PurdueTeam20: "@San Jose State",
    PurdueTeam21: "@Marist",
    PurdueTeam22: "@Washington",
    PurdueTeam23: "@Northeastern",
    PurdueTeam24: "@Portland State",
    PurdueTeam25: "@William & Mary",
    PurdueTeam26: "@VCU",
    PurdueTeam27: "@Evansville",
  },
];

export default function purdueSchedule () {
return (
  <>
    <div>
      <center><h1>Purdue schedule</h1></center>

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
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam1)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam2)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam3)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam4)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam5)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam6)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam7)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam8)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam9)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam10)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam11)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam12)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam13)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam14)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam15)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam16)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam17)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam18)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam19)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam20)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam21)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam22)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam23)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam24)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam25)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam26)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam27)}</h2>
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
            <h2><YourComponent generatePlayerNames={generatePlayerNames} /></h2>
            </div>
        </div>
      </div>
      </div>
      <br></br>
      <center><LinkButton /></center>
    </>
  );
  };

