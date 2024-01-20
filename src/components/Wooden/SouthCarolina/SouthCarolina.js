import {generateSouthCarolinaNames, SouthCarolinaComponent} from './SouthCarolinaNames';
import LinkButton from './LinkButton';

const scheduleSouthCarolina = [
  {
    SouthCarolinaTeam1: "@UCLA",
    SouthCarolinaTeam2: "UAB",
    SouthCarolinaTeam3: "George Mason",
    SouthCarolinaTeam4: "@Fresno State",
    SouthCarolinaTeam5: "Oral Roberts",
    SouthCarolinaTeam6: "VCU",
    SouthCarolinaTeam7: "Washington",
    SouthCarolinaTeam8: "UCLA",
    SouthCarolinaTeam9: "Marist",
    SouthCarolinaTeam10: "Evansville",
    SouthCarolinaTeam11: "Portland State",
    SouthCarolinaTeam12: "San Jose State",
    SouthCarolinaTeam13: "Delaware State",
    SouthCarolinaTeam14: "Purdue",
    SouthCarolinaTeam15: "Northeastern",
    SouthCarolinaTeam16: "Penn",
    SouthCarolinaTeam17: "@VCU",
    SouthCarolinaTeam18: "@Washington",
    SouthCarolinaTeam19: "@UCLA",
    SouthCarolinaTeam20: "@Marist",
    SouthCarolinaTeam21: "@Evansville",
    SouthCarolinaTeam22: "@Portland State",
    SouthCarolinaTeam23: "@San Jose State",
    SouthCarolinaTeam24: "@Delaware State",
    SouthCarolinaTeam25: "@Purdue",
    SouthCarolinaTeam26: "@Northeastern",
    SouthCarolinaTeam27: "@Penn",
  },
];

const SouthCarolinaSchedule = () => {

  return (
    <>
      <div>
      <center><h1>South Carolina schedule</h1></center>

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
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam1)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam2)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam3)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam4)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam5)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam6)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam7)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam8)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam9)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam10)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam11)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam12)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam13)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam14)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam15)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam16)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam17)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam18)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam19)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam20)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam21)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam22)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam23)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam24)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam25)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam26)}</h2>
              <h2>{scheduleSouthCarolina.map((scheduleSouthCarolina) => scheduleSouthCarolina.SouthCarolinaTeam27)}</h2>
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
            <h2><SouthCarolinaComponent generateSouthCarolinaNames={generateSouthCarolinaNames} /></h2>

            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center><LinkButton /></center>
    </>
  );
};
export default SouthCarolinaSchedule;
