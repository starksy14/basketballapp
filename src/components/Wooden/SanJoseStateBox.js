import {generateSanJoseStateNames, SanJoseStateComponent} from './SanJoseStateNames';
var SanJoseStateS1 = Math.floor((Math.random() * 28) + 0);
var SanJoseStateS2 = Math.floor((Math.random() * 26) + 0);
var SanJoseStateS3 = Math.floor((Math.random() * 24) + 0);
var SanJoseStateS4 = Math.floor((Math.random() * 22) + 0);
var SanJoseStateS5 = Math.floor((Math.random() * 20) + 0);
var SanJoseStateS6 = Math.floor((Math.random() * 10) + 0);
var SanJoseStateS7 = Math.floor((Math.random() * 10) + 0);
var SanJoseStateS8 = Math.floor((Math.random() * 10) + 0);
var SanJoseStateS9 = Math.floor((Math.random() * 10) + 0);
var SanJoseStateS10 = Math.floor((Math.random() * 10) + 0);

var SanJoseStateScores = [SanJoseStateS1, SanJoseStateS2, SanJoseStateS3, SanJoseStateS4, SanJoseStateS5, SanJoseStateS6, SanJoseStateS7, SanJoseStateS8, SanJoseStateS9, SanJoseStateS10];

let SanJoseStateSum = SanJoseStateScores.reduce(function(a, b) {
  return a + b;
});
var SanJoseStateTotal = (SanJoseStateSum);

export default function SanJoseStateBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>SanJoseState</h4>
          <div className="row">
            <div className="col-sm">
            <h2><SanJoseStateComponent generateSanJoseStateNames={generateSanJoseStateNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{SanJoseStateTotal}</h4>
          <h2>{SanJoseStateS1}</h2>
              <h2>{SanJoseStateS2}</h2>
              <h2>{SanJoseStateS3}</h2>
              <h2>{SanJoseStateS4}</h2>
              <h2>{SanJoseStateS5}</h2>
              <h2>{SanJoseStateS6}</h2>
              <h2>{SanJoseStateS7}</h2>
              <h2>{SanJoseStateS8}</h2>
              <h2>{SanJoseStateS9}</h2>
              <h2>{SanJoseStateS10}</h2>              
          </div>
          </div>
          </div>
        )
}