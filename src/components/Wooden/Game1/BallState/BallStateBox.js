import {generateBallStateNames, BallStateComponent} from './BallStateNames';
import { default as NortheasternTotalG1 } from '../Northeastern/NortheasternBox';
var BallStateG1S1 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
var BallStateG1S2 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var BallStateG1S3 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var BallStateG1S4 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var BallStateG1S5 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var BallStateG1S6 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var BallStateG1S7 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var BallStateG1S8 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var BallStateG1S9 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var BallStateG1S10 = Math.floor(Math.random() * (5 - 0 + 1) + 0);

var BallStateScores = [BallStateG1S1, BallStateG1S2, BallStateG1S3, BallStateG1S4, BallStateG1S5, BallStateG1S6, BallStateG1S7, BallStateG1S8, BallStateG1S9, BallStateG1S10];

let BallStateSumG1 = BallStateScores.reduce(function(a, b) {
  return a + b;
});
var BallStateTotalG1 = (BallStateSumG1);

if (BallStateTotalG1 === NortheasternTotalG1) {
  BallStateG1S10 = 6;
}

export default function BallStateBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Ball State</h4>
          <div className="row">
            <div className="col-sm">
            <h2><BallStateComponent generateBallStateNames={generateBallStateNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{BallStateTotalG1}</h4>
          <h2>{BallStateG1S1}</h2>
              <h2>{BallStateG1S2}</h2>
              <h2>{BallStateG1S3}</h2>
              <h2>{BallStateG1S4}</h2>
              <h2>{BallStateG1S5}</h2>
              <h2>{BallStateG1S6}</h2>
              <h2>{BallStateG1S7}</h2>
              <h2>{BallStateG1S8}</h2>
              <h2>{BallStateG1S9}</h2>
              <h2>{BallStateG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}