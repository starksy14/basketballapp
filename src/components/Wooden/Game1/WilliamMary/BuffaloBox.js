import {generateBuffaloNames, BuffaloComponent} from '../Buffalo/BuffaloNames';
var BuffaloG1S1 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
var BuffaloG1S2 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var BuffaloG1S3 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var BuffaloG1S4 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var BuffaloG1S5 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var BuffaloG1S6 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var BuffaloG1S7 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var BuffaloG1S8 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var BuffaloG1S9 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var BuffaloG1S10 = Math.floor(Math.random() * (5 - 0 + 1) + 0);

var BuffaloScores = [BuffaloG1S1, BuffaloG1S2, BuffaloG1S3, BuffaloG1S4, BuffaloG1S5, BuffaloG1S6, BuffaloG1S7, BuffaloG1S8, BuffaloG1S9, BuffaloG1S10];

let BuffaloSumG1 = BuffaloScores.reduce(function(a, b) {
  return a + b;
});
var BuffaloTotalG1 = (BuffaloSumG1);


export default function BuffaloBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Buffalo</h4>
          <div className="row">
            <div className="col-sm">
            <h2><BuffaloComponent generateBuffaloNames={generateBuffaloNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{BuffaloTotalG1}</h4>
          <h2>{BuffaloG1S1}</h2>
              <h2>{BuffaloG1S2}</h2>
              <h2>{BuffaloG1S3}</h2>
              <h2>{BuffaloG1S4}</h2>
              <h2>{BuffaloG1S5}</h2>
              <h2>{BuffaloG1S6}</h2>
              <h2>{BuffaloG1S7}</h2>
              <h2>{BuffaloG1S8}</h2>
              <h2>{BuffaloG1S9}</h2>
              <h2>{BuffaloG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}