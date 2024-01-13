import {generateTexasNames, TexasComponent} from './TexasNames';
import LinkButton from './LinkButton';

export const scheduleTexas = [
  {
    TexasTeam1: "Texas",
    TexasTeam2: "Rutgers",
    TexasTeam3: "@Indiana State",
    TexasTeam4: "UNLV",
    TexasTeam5: "@Radford",
    TexasTeam6: "UCLA",
    TexasTeam7: "Penn",
    TexasTeam8: "Delaware State",
    TexasTeam9: "San Jose State",
    TexasTeam10: "Marist",
    TexasTeam11: "Washington",
    TexasTeam12: "Northeastern",
    TexasTeam13: "Portland State",
    TexasTeam14: "William & Mary",
    TexasTeam15: "VCU",
    TexasTeam16: "Evansville",
    TexasTeam17: "@UCLA",
    TexasTeam18: "@Penn",
    TexasTeam19: "@Delaware State",
    TexasTeam20: "@San Jose State",
    TexasTeam21: "@Marist",
    TexasTeam22: "@Washington",
    TexasTeam23: "@Northeastern",
    TexasTeam24: "@Portland State",
    TexasTeam25: "@William & Mary",
    TexasTeam26: "@VCU",
    TexasTeam27: "@Evansville",
  },
];


export default function texasSchedule () {
  
  return (
    <>
      <div>
      <center><h1>Texas schedule</h1></center>

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
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam1)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam2)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam3)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam4)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam5)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam6)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam7)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam8)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam9)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam10)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam11)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam12)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam13)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam14)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam15)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam16)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam17)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam18)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam19)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam20)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam21)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam22)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam23)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam24)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam25)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam26)}</h2>
              <h2>{scheduleTexas.map((scheduleTexas) => scheduleTexas.TexasTeam27)}</h2>
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
            <h2><TexasComponent generatePlayerNames={generateTexasNames} /></h2>
          </div>
        </div>
      </div>
      </div>
      <br></br>
      <center><LinkButton /></center>
    </>
  );
  };