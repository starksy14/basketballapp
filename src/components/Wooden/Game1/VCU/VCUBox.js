import {generateVCUNames, VCUComponent} from './VCUNames';
import { default as HawaiiTotalG1 } from '../Texas/TexasBox';
var VCUG1S1 = Math.floor((Math.random() * 30) + 0);
var VCUG1S2 = Math.floor((Math.random() * 28) + 0);
var VCUG1S3 = Math.floor((Math.random() * 26) + 0);
var VCUG1S4 = Math.floor((Math.random() * 24) + 0);
var VCUG1S5 = Math.floor((Math.random() * 22) + 0);
var VCUG1S6 = Math.floor((Math.random() * 10) + 0);
var VCUG1S7 = Math.floor((Math.random() * 10) + 0);
var VCUG1S8 = Math.floor((Math.random() * 10) + 0);
var VCUG1S9 = Math.floor((Math.random() * 10) + 0);
var VCUG1S10 = Math.floor((Math.random() * 10) + 0);

var VCUScores = [VCUG1S1, VCUG1S2, VCUG1S3, VCUG1S4, VCUG1S5, VCUG1S6, VCUG1S7, VCUG1S8, VCUG1S9, VCUG1S10];

let VCUSumG1 = VCUScores.reduce(function(a, b) {
  return a + b;
});
var VCUTotalG1 = (VCUSumG1);

if (VCUTotalG1 === HawaiiTotalG1) {
  VCUTotalG1 = VCUTotalG1 + 2;
}

export default function VCUBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>VCU</h4>
          <div className="row">
            <div className="col-sm">
            <h2><VCUComponent generateVCUNames={generateVCUNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{VCUTotalG1}</h4>
          <h2>{VCUG1S1}</h2>
              <h2>{VCUG1S2}</h2>
              <h2>{VCUG1S3}</h2>
              <h2>{VCUG1S4}</h2>
              <h2>{VCUG1S5}</h2>
              <h2>{VCUG1S6}</h2>
              <h2>{VCUG1S7}</h2>
              <h2>{VCUG1S8}</h2>
              <h2>{VCUG1S9}</h2>
              <h2>{VCUG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}