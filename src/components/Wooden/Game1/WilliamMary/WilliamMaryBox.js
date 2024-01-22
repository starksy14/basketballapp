import {generateWilliamMaryNames, WilliamMaryComponent} from './WilliamMaryNames';
import { default as BuffaloTotalG1 } from './BuffaloBox';
var WilliamMaryG1S1 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
var WilliamMaryG1S2 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var WilliamMaryG1S3 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var WilliamMaryG1S4 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var WilliamMaryG1S5 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var WilliamMaryG1S6 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var WilliamMaryG1S7 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var WilliamMaryG1S8 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var WilliamMaryG1S9 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var WilliamMaryG1S10 = Math.floor(Math.random() * (5 - 0 + 1) + 0);

var WilliamMaryScores = [WilliamMaryG1S1, WilliamMaryG1S2, WilliamMaryG1S3, WilliamMaryG1S4, WilliamMaryG1S5, WilliamMaryG1S6, WilliamMaryG1S7, WilliamMaryG1S8, WilliamMaryG1S9, WilliamMaryG1S10];

let WilliamMarySumG1 = WilliamMaryScores.reduce(function(a, b) {
  return a + b;
});
var WilliamMaryTotalG1 = (WilliamMarySumG1);

if (WilliamMaryTotalG1 === BuffaloTotalG1) {
  WilliamMaryG1S10 = 6;
}

export default function WilliamMaryBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Nicholls State</h4>
          <div className="row">
            <div className="col-sm">
            <h2><WilliamMaryComponent generateWilliamMaryNames={generateWilliamMaryNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{WilliamMaryTotalG1}</h4>
          <h2>{WilliamMaryG1S1}</h2>
              <h2>{WilliamMaryG1S2}</h2>
              <h2>{WilliamMaryG1S3}</h2>
              <h2>{WilliamMaryG1S4}</h2>
              <h2>{WilliamMaryG1S5}</h2>
              <h2>{WilliamMaryG1S6}</h2>
              <h2>{WilliamMaryG1S7}</h2>
              <h2>{WilliamMaryG1S8}</h2>
              <h2>{WilliamMaryG1S9}</h2>
              <h2>{WilliamMaryG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}