import {generateDelawareStateNames, DelawareStateComponent} from './DelawareStateNames';
var DelawareStateG1S1 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
var DelawareStateG1S2 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var DelawareStateG1S3 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var DelawareStateG1S4 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var DelawareStateG1S5 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var DelawareStateG1S6 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var DelawareStateG1S7 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var DelawareStateG1S8 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var DelawareStateG1S9 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var DelawareStateG1S10 = Math.floor(Math.random() * (5 - 0 + 1) + 0);

var DelawareStateScores = [DelawareStateG1S1, DelawareStateG1S2, DelawareStateG1S3, DelawareStateG1S4, DelawareStateG1S5, DelawareStateG1S6, DelawareStateG1S7, DelawareStateG1S8, DelawareStateG1S9, DelawareStateG1S10];

let DelawareStateSumG1 = DelawareStateScores.reduce(function(a, b) {
  return a + b;
});
var DelawareStateTotalG1 = (DelawareStateSumG1);


export default function DelawareStateBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Delaware State</h4>
          <div className="row">
            <div className="col-sm">
            <h2><DelawareStateComponent generateDelawareStateNames={generateDelawareStateNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{DelawareStateTotalG1}</h4>
          <h2>{DelawareStateG1S1}</h2>
              <h2>{DelawareStateG1S2}</h2>
              <h2>{DelawareStateG1S3}</h2>
              <h2>{DelawareStateG1S4}</h2>
              <h2>{DelawareStateG1S5}</h2>
              <h2>{DelawareStateG1S6}</h2>
              <h2>{DelawareStateG1S7}</h2>
              <h2>{DelawareStateG1S8}</h2>
              <h2>{DelawareStateG1S9}</h2>
              <h2>{DelawareStateG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}