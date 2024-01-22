import {generateBuffaloNames, BuffaloComponent} from './BuffaloNames';
import BuffaloLinkButton from './BuffaloLinkButton';

export const scheduleBuffalo = [
  {
    BuffaloTeam1: "Buffalo",
    BuffaloTeam2: "Rutgers",
    BuffaloTeam3: "@Indiana State",
    BuffaloTeam4: "UNLV",
    BuffaloTeam5: "@Radford",
    BuffaloTeam6: "UCLA",
    BuffaloTeam7: "Penn",
    BuffaloTeam8: "Delaware State",
    BuffaloTeam9: "San Jose State",
    BuffaloTeam10: "Marist",
    BuffaloTeam11: "Washington",
    BuffaloTeam12: "Northeastern",
    BuffaloTeam13: "Portland State",
    BuffaloTeam14: "William & Mary",
    BuffaloTeam15: "VCU",
    BuffaloTeam16: "Evansville",
    BuffaloTeam17: "@UCLA",
    BuffaloTeam18: "@Penn",
    BuffaloTeam19: "@Delaware State",
    BuffaloTeam20: "@San Jose State",
    BuffaloTeam21: "@Marist",
    BuffaloTeam22: "@Washington",
    BuffaloTeam23: "@Northeastern",
    BuffaloTeam24: "@Portland State",
    BuffaloTeam25: "@William & Mary",
    BuffaloTeam26: "@VCU",
    BuffaloTeam27: "@Evansville",
  },
];


export default function BuffaloSchedule () {
  
  return (
    <>
      <div>
      <center><h1>Buffalo schedule</h1></center>

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
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam1)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam2)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam3)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam4)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam5)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam6)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam7)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam8)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam9)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam10)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam11)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam12)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam13)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam14)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam15)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam16)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam17)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam18)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam19)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam20)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam21)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam22)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam23)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam24)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam25)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam26)}</h2>
              <h2>{scheduleBuffalo.map((scheduleBuffalo) => scheduleBuffalo.BuffaloTeam27)}</h2>
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
            <h2><BuffaloComponent generatePlayerNames={generateBuffaloNames} /></h2>
          </div>
        </div>
      </div>
      </div>
      <br></br>
      <center><BuffaloLinkButton /></center>
    </>
  );
  };