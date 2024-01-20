import {generateDelawareStateNames, DelawareStateComponent} from './DelawareStateNames';
var DelawareStateS1 = Math.floor((Math.random() * 28) + 0);
var DelawareStateS2 = Math.floor((Math.random() * 26) + 0);
var DelawareStateS3 = Math.floor((Math.random() * 24) + 0);
var DelawareStateS4 = Math.floor((Math.random() * 22) + 0);
var DelawareStateS5 = Math.floor((Math.random() * 20) + 0);
var DelawareStateS6 = Math.floor((Math.random() * 10) + 0);
var DelawareStateS7 = Math.floor((Math.random() * 10) + 0);
var DelawareStateS8 = Math.floor((Math.random() * 10) + 0);
var DelawareStateS9 = Math.floor((Math.random() * 10) + 0);
var DelawareStateS10 = Math.floor((Math.random() * 10) + 0);

var DelawareStateScores = [DelawareStateS1, DelawareStateS2, DelawareStateS3, DelawareStateS4, DelawareStateS5, DelawareStateS6, DelawareStateS7, DelawareStateS8, DelawareStateS9, DelawareStateS10];

let DelawareStateSum = DelawareStateScores.reduce(function(a, b) {
  return a + b;
});
var DelawareStateTotal = (DelawareStateSum);

export default function DelawareStateBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>DelawareState</h4>
          <div className="row">
            <div className="col-sm">
            <h2><DelawareStateComponent generateDelawareStateNames={generateDelawareStateNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{DelawareStateTotal}</h4>
          <h2>{DelawareStateS1}</h2>
              <h2>{DelawareStateS2}</h2>
              <h2>{DelawareStateS3}</h2>
              <h2>{DelawareStateS4}</h2>
              <h2>{DelawareStateS5}</h2>
              <h2>{DelawareStateS6}</h2>
              <h2>{DelawareStateS7}</h2>
              <h2>{DelawareStateS8}</h2>
              <h2>{DelawareStateS9}</h2>
              <h2>{DelawareStateS10}</h2>              
          </div>
          </div>
          </div>
        )
}