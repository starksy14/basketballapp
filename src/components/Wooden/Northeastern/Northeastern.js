import {generateNortheasternNames, NortheasternComponent} from './NortheasternNames';
import LinkButton from '../Purdue/LinkButton';

const scheduleNortheastern = [
  {
    NortheasternTeam1: "@Ball State",
    NortheasternTeam2: "Tennessee Martin",
    NortheasternTeam3: "@Central Michigan",
    NortheasternTeam4: "Southern Indiana",
    NortheasternTeam5: "@Marquette",
    NortheasternTeam6: "@Penn",
    NortheasternTeam7: "@Portland State",
    NortheasternTeam8: "@San Jose State",
    NortheasternTeam9: "@UCLA",
    NortheasternTeam10: "@Delaware State",
    NortheasternTeam11: "@Evansville",
    NortheasternTeam12: "@Purdue",
    NortheasternTeam13: "@VCU",
    NortheasternTeam14: "@Washington",
    NortheasternTeam15: "@William & Mary",
    NortheasternTeam16: "@Marist",
    NortheasternTeam17: "Penn",
    NortheasternTeam18: "Portland State",
    NortheasternTeam19: "San Jose State",
    NortheasternTeam20: "UCLA",
    NortheasternTeam21: "Delaware State",
    NortheasternTeam22: "Evansville",
    NortheasternTeam23: "Purdue",
    NortheasternTeam24: "VCU",
    NortheasternTeam25: "Washington",
    NortheasternTeam26: "William & Mary",
    NortheasternTeam27: "Marist",
  },
];

const NortheasternSchedule = () => {
    
    return (
      <>
        <div>
        <center><h1>Northeastern schedule</h1></center>
  
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
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam1)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam2)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam3)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam4)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam5)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam6)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam7)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam8)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam9)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam10)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam11)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam12)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam13)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam14)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam15)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam16)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam17)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam18)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam19)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam20)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam21)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam22)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam23)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam24)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam25)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam26)}</h2>
                <h2>{scheduleNortheastern.map((scheduleNortheastern) => scheduleNortheastern.NortheasternTeam27)}</h2>
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
              <h2><NortheasternComponent generateNortheasternNames={generateNortheasternNames} /></h2>

              </div>
            </div>
          </div>
        </div>
        <br></br>
      <center><LinkButton /></center>
      </>
    );
  };
  export default NortheasternSchedule;
  