import {generateLamarNames, LamarComponent} from './LamarNames';
import LamarLinkButton from './LamarLinkButton';

export const scheduleLamar = [
  {
    LamarTeam1: "Lamar",
    LamarTeam2: "Rutgers",
    LamarTeam3: "@Indiana State",
    LamarTeam4: "UNLV",
    LamarTeam5: "@Radford",
    LamarTeam6: "UCLA",
    LamarTeam7: "Penn",
    LamarTeam8: "Delaware State",
    LamarTeam9: "San Jose State",
    LamarTeam10: "Marist",
    LamarTeam11: "Washington",
    LamarTeam12: "Northeastern",
    LamarTeam13: "Portland State",
    LamarTeam14: "William & Mary",
    LamarTeam15: "VCU",
    LamarTeam16: "Evansville",
    LamarTeam17: "@UCLA",
    LamarTeam18: "@Penn",
    LamarTeam19: "@Delaware State",
    LamarTeam20: "@San Jose State",
    LamarTeam21: "@Marist",
    LamarTeam22: "@Washington",
    LamarTeam23: "@Northeastern",
    LamarTeam24: "@Portland State",
    LamarTeam25: "@William & Mary",
    LamarTeam26: "@VCU",
    LamarTeam27: "@Evansville",
  },
];


export default function LamarSchedule () {
  
  return (
    <>
      <div>
      <center><h1>Lamar schedule</h1></center>

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
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam1)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam2)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam3)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam4)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam5)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam6)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam7)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam8)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam9)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam10)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam11)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam12)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam13)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam14)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam15)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam16)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam17)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam18)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam19)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam20)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam21)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam22)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam23)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam24)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam25)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam26)}</h2>
              <h2>{scheduleLamar.map((scheduleLamar) => scheduleLamar.LamarTeam27)}</h2>
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
            <h2><LamarComponent generatePlayerNames={generateLamarNames} /></h2>
          </div>
        </div>
      </div>
      </div>
      <br></br>
      <center><LamarLinkButton /></center>
    </>
  );
  };