import {generateMaristNames, MaristComponent} from './MaristNames';
import { default as LamarTotalG1 } from '../Lamar/LamarBox';
var MaristG1S1 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
var MaristG1S2 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var MaristG1S3 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var MaristG1S4 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var MaristG1S5 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var MaristG1S6 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var MaristG1S7 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var MaristG1S8 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var MaristG1S9 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var MaristG1S10 = Math.floor(Math.random() * (5 - 0 + 1) + 0);

var MaristScores = [MaristG1S1, MaristG1S2, MaristG1S3, MaristG1S4, MaristG1S5, MaristG1S6, MaristG1S7, MaristG1S8, MaristG1S9, MaristG1S10];

let MaristSumG1 = MaristScores.reduce(function(a, b) {
  return a + b;
});
var MaristTotalG1 = (MaristSumG1);

if (MaristTotalG1 === LamarTotalG1) {
  MaristG1S10 = 6;
}

export default function MaristBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Nicholls State</h4>
          <div className="row">
            <div className="col-sm">
            <h2><MaristComponent generateMaristNames={generateMaristNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{MaristTotalG1}</h4>
          <h2>{MaristG1S1}</h2>
              <h2>{MaristG1S2}</h2>
              <h2>{MaristG1S3}</h2>
              <h2>{MaristG1S4}</h2>
              <h2>{MaristG1S5}</h2>
              <h2>{MaristG1S6}</h2>
              <h2>{MaristG1S7}</h2>
              <h2>{MaristG1S8}</h2>
              <h2>{MaristG1S9}</h2>
              <h2>{MaristG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}