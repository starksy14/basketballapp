import {generateHoustonNames, HoustonComponent} from './HoustonNames';
import { default as DelawareStateTotalG1 } from '../DelawareState/DelawareStateBox';
var HoustonG1S1 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
var HoustonG1S2 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var HoustonG1S3 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var HoustonG1S4 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var HoustonG1S5 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var HoustonG1S6 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var HoustonG1S7 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var HoustonG1S8 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var HoustonG1S9 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var HoustonG1S10 = Math.floor(Math.random() * (5 - 0 + 1) + 0);

var HoustonScores = [HoustonG1S1, HoustonG1S2, HoustonG1S3, HoustonG1S4, HoustonG1S5, HoustonG1S6, HoustonG1S7, HoustonG1S8, HoustonG1S9, HoustonG1S10];

let HoustonSumG1 = HoustonScores.reduce(function(a, b) {
  return a + b;
});
var HoustonTotalG1 = (HoustonSumG1);

if (HoustonTotalG1 === DelawareStateTotalG1) {
  HoustonG1S10 = 6;
}

export default function HoustonBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Houston</h4>
          <div className="row">
            <div className="col-sm">
            <h2><HoustonComponent generateHoustonNames={generateHoustonNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{HoustonTotalG1}</h4>
          <h2>{HoustonG1S1}</h2>
              <h2>{HoustonG1S2}</h2>
              <h2>{HoustonG1S3}</h2>
              <h2>{HoustonG1S4}</h2>
              <h2>{HoustonG1S5}</h2>
              <h2>{HoustonG1S6}</h2>
              <h2>{HoustonG1S7}</h2>
              <h2>{HoustonG1S8}</h2>
              <h2>{HoustonG1S9}</h2>
              <h2>{HoustonG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}