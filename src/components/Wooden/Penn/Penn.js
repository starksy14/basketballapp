import {generatePennNames, PennComponent} from './PennNames';
import LinkButton from '../Purdue/LinkButton';

const schedulePenn = [
  {
    PennTeam1: "@Bryant",
    PennTeam2: "@Austin Peay",
    PennTeam3: "Coastal Carolina",
    PennTeam4: "Boston University",
    PennTeam5: "Chicago State",
    PennTeam6: "Northeastern",
    PennTeam7: "Purdue",
    PennTeam8: "Portland State",
    PennTeam9: "Washington",
    PennTeam10: "UCLA",
    PennTeam11: "Marist",
    PennTeam12: "Evansville",
    PennTeam13: "San Jose State",
    PennTeam14: "VCU",
    PennTeam15: "Delaware State",
    PennTeam16: "William & Mary",
    PennTeam17: "@Northeastern",
    PennTeam18: "@Purdue",
    PennTeam19: "@Portland State",
    PennTeam20: "@Washington",
    PennTeam21: "@UCLA",
    PennTeam22: "@Marist",
    PennTeam23: "@Evansville",
    PennTeam24: "@San Jose State",
    PennTeam25: "@VCU",
    PennTeam26: "@Delaware State",
    PennTeam27: "@William & Mary",
  },
];

const PennSchedule = () => {
    
    return (
      <>
        <div>
        <center><h1>Penn schedule</h1></center>
  
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
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam1)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam2)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam3)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam4)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam5)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam6)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam7)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam8)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam9)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam10)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam11)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam12)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam13)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam14)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam15)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam16)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam17)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam18)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam19)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam20)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam21)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam22)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam23)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam24)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam25)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam26)}</h2>
                <h2>{schedulePenn.map((schedulePenn) => schedulePenn.PennTeam27)}</h2>
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
              <h2><PennComponent generatePennNames={generatePennNames} /></h2>

              </div>
            </div>
          </div>
        </div>
        <br></br>
      <center><LinkButton /></center>
      </>
    );
  };
  export default PennSchedule;
  