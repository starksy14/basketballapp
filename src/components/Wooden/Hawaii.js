import {generateHawaiiNames, HawaiiComponent} from './HawaiiNames';
import HawaiiLinkButton from './HawaiiLinkButton';

const scheduleHawaii = [
  {
    HawaiiTeam1: "@Nicholls State",
    HawaiiTeam2: "Albany",
    HawaiiTeam3: "Army",
    HawaiiTeam4: "@Alabama",
    HawaiiTeam5: "@Cincinnati",
    HawaiiTeam6: "Portland State",
    HawaiiTeam7: "San Jose State",
    HawaiiTeam8: "VCU",
    HawaiiTeam9: "Delaware State",
    HawaiiTeam10: "William & Mary",
    HawaiiTeam11: "Northeastern",
    HawaiiTeam12: "Penn",
    HawaiiTeam13: "Washington",
    HawaiiTeam14: "UCLA",
    HawaiiTeam15: "Marist",
    HawaiiTeam16: "Purdue",
    HawaiiTeam17: "@Portland State",
    HawaiiTeam18: "@San Jose State",
    HawaiiTeam19: "@VCU",
    HawaiiTeam20: "@Delaware State",
    HawaiiTeam21: "@William & Mary",
    HawaiiTeam22: "@Northeastern",
    HawaiiTeam23: "@Penn",
    HawaiiTeam24: "@Washington",
    HawaiiTeam25: "@UCLA",
    HawaiiTeam26: "@Marist",
    HawaiiTeam27: "@Purdue",
  },
];


const HawaiiSchedule = () => {
  
  return (
    <>
      <div>
      <center><h1>Hawaii schedule</h1></center>

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
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam1)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam2)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam3)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam4)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam5)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam6)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam7)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam8)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam9)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam10)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam11)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam12)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam13)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam14)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam15)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam16)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam17)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam18)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam19)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam20)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam21)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam22)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam23)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam24)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam25)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam26)}</h2>
              <h2>{scheduleHawaii.map((scheduleHawaii) => scheduleHawaii.HawaiiTeam27)}</h2>
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
            <h2><HawaiiComponent generateHawaiiNames={generateHawaiiNames} /></h2>

            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center><HawaiiLinkButton /></center>
    </>
  );
};
export default HawaiiSchedule;
