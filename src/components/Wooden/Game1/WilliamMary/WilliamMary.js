import {generateWilliamMaryNames, WilliamMaryComponent} from './WilliamMaryNames';
import WilliamMaryLinkButton from './WilliamMaryLinkButton';

const scheduleWilliamMary = [
  {
    WilliamMaryTeam1: "Buffalo",
    WilliamMaryTeam2: "@Connecticut",
    WilliamMaryTeam3: "@Colorado",
    WilliamMaryTeam4: "@LSU",
    WilliamMaryTeam5: "@Missouri State",
    WilliamMaryTeam6: "VCU",
    WilliamMaryTeam7: "Washington",
    WilliamMaryTeam8: "UCLA",
    WilliamMaryTeam9: "Marist",
    WilliamMaryTeam10: "Evansville",
    WilliamMaryTeam11: "Portland State",
    WilliamMaryTeam12: "San Jose State",
    WilliamMaryTeam13: "Delaware State",
    WilliamMaryTeam14: "Purdue",
    WilliamMaryTeam15: "Northeastern",
    WilliamMaryTeam16: "Penn",
    WilliamMaryTeam17: "@VCU",
    WilliamMaryTeam18: "@Washington",
    WilliamMaryTeam19: "@UCLA",
    WilliamMaryTeam20: "@Marist",
    WilliamMaryTeam21: "@Evansville",
    WilliamMaryTeam22: "@Portland State",
    WilliamMaryTeam23: "@San Jose State",
    WilliamMaryTeam24: "@Delaware State",
    WilliamMaryTeam25: "@Purdue",
    WilliamMaryTeam26: "@Northeastern",
    WilliamMaryTeam27: "@Penn",
  },
];

const WilliamMarySchedule = () => {

  return (
    <>
      <div>
      <center><h1>William & Mary schedule</h1></center>

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
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam1)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam2)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam3)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam4)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam5)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam6)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam7)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam8)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam9)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam10)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam11)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam12)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam13)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam14)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam15)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam16)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam17)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam18)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam19)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam20)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam21)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam22)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam23)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam24)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam25)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam26)}</h2>
              <h2>{scheduleWilliamMary.map((scheduleWilliamMary) => scheduleWilliamMary.WilliamMaryTeam27)}</h2>
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
            <h2><WilliamMaryComponent generateWilliamMaryNames={generateWilliamMaryNames} /></h2>

            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center><WilliamMaryLinkButton /></center>
    </>
  );
};
export default WilliamMarySchedule;
