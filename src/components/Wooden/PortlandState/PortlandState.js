import {generatePortlandStateNames, PortlandStateComponent} from './PortlandStateNames';
import LinkButton from '../Purdue/LinkButton';

const schedulePortlandSt = [
  {
    PortlandStTeam1: "Northern Illinois",
    PortlandStTeam2: "@UNC Asheville",
    PortlandStTeam3: "@Bowling Green",
    PortlandStTeam4: "Texas A&M Corpus Christi",
    PortlandStTeam5: "Eastern Michigan",
    PortlandStTeam6: "@Evansville",
    PortlandStTeam7: "@Northeastern",
    PortlandStTeam8: "@Penn",
    PortlandStTeam9: "@VCU",
    PortlandStTeam10: "@Washington",
    PortlandStTeam11: "@William & Mary",
    PortlandStTeam12: "@Marist",
    PortlandStTeam13: "@Purdue",
    PortlandStTeam14: "@San Jose State",
    PortlandStTeam15: "@UCLA",
    PortlandStTeam16: "@Delaware State",
    PortlandStTeam17: "Evansville",
    PortlandStTeam18: "Northeastern",
    PortlandStTeam19: "Penn",
    PortlandStTeam20: "VCU",
    PortlandStTeam21: "Washington",
    PortlandStTeam22: "William & Mary",
    PortlandStTeam23: "Marist",
    PortlandStTeam24: "Purdue",
    PortlandStTeam25: "San Jose State",
    PortlandStTeam26: "UCLA",
    PortlandStTeam27: "Delaware State",
  },
];

          const PortlandStSchedule = () => {
            
            return (
              <>
                <div>
                <center><h1>Portland State schedule</h1></center>
          
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
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam1)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam2)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam3)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam4)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam5)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam6)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam7)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam8)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam9)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam10)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam11)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam12)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam13)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam14)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam15)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam16)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam17)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam18)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam19)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam20)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam21)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam22)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam23)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam24)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam25)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam26)}</h2>
                        <h2>{schedulePortlandSt.map((schedulePortlandSt) => schedulePortlandSt.PortlandStTeam27)}</h2>
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
                      <h2><PortlandStateComponent generatePortlandStateNames={generatePortlandStateNames} /></h2>

                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
      <center><LinkButton /></center>
              </>
            );
          };
          export default PortlandStSchedule;
          