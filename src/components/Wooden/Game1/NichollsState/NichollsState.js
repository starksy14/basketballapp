import {generateNichollsStateNames, NichollsStateComponent} from './NichollsStateNames';
import LinkButton from './LinkButton';

export const scheduleNichollsState = [
  {
    NichollsStateTeam1: "Texas",
    NichollsStateTeam2: "Rutgers",
    NichollsStateTeam3: "@Indiana State",
    NichollsStateTeam4: "UNLV",
    NichollsStateTeam5: "@Radford",
    NichollsStateTeam6: "UCLA",
    NichollsStateTeam7: "Penn",
    NichollsStateTeam8: "Delaware State",
    NichollsStateTeam9: "San Jose State",
    NichollsStateTeam10: "Marist",
    NichollsStateTeam11: "Washington",
    NichollsStateTeam12: "Northeastern",
    NichollsStateTeam13: "Portland State",
    NichollsStateTeam14: "William & Mary",
    NichollsStateTeam15: "VCU",
    NichollsStateTeam16: "Evansville",
    NichollsStateTeam17: "@UCLA",
    NichollsStateTeam18: "@Penn",
    NichollsStateTeam19: "@Delaware State",
    NichollsStateTeam20: "@San Jose State",
    NichollsStateTeam21: "@Marist",
    NichollsStateTeam22: "@Washington",
    NichollsStateTeam23: "@Northeastern",
    NichollsStateTeam24: "@Portland State",
    NichollsStateTeam25: "@William & Mary",
    NichollsStateTeam26: "@VCU",
    NichollsStateTeam27: "@Evansville",
  },
];

export default function NichollsStateSchedule () {
return (
  <>
    <div>
      <center><h1>NichollsState schedule</h1></center>

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
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam1)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam2)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam3)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam4)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam5)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam6)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam7)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam8)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam9)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam10)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam11)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam12)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam13)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam14)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam15)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam16)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam17)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam18)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam19)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam20)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam21)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam22)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam23)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam24)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam25)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam26)}</h2>
              <h2>{scheduleNichollsState.map((scheduleNichollsState) => scheduleNichollsState.NichollsStateTeam27)}</h2>
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
            <h2><NichollsStateComponent generateNichollsStateNames={generateNichollsStateNames} /></h2>
            </div>
        </div>
      </div>
      </div>
      <br></br>
      <center><LinkButton /></center>
    </>
  );
  };

