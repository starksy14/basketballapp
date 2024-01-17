import {generateVCUNames, VCUComponent} from './VCUNames';
var VCUS1 = Math.floor((Math.random() * 28) + 0);
var VCUS2 = Math.floor((Math.random() * 26) + 0);
var VCUS3 = Math.floor((Math.random() * 24) + 0);
var VCUS4 = Math.floor((Math.random() * 22) + 0);
var VCUS5 = Math.floor((Math.random() * 20) + 0);
var VCUS6 = Math.floor((Math.random() * 10) + 0);
var VCUS7 = Math.floor((Math.random() * 10) + 0);
var VCUS8 = Math.floor((Math.random() * 10) + 0);
var VCUS9 = Math.floor((Math.random() * 10) + 0);
var VCUS10 = Math.floor((Math.random() * 10) + 0);

var VCUScores = [VCUS1, VCUS2, VCUS3, VCUS4, VCUS5, VCUS6, VCUS7, VCUS8, VCUS9, VCUS10];

let VCUSum = VCUScores.reduce(function(a, b) {
  return a + b;
});
var VCUTotal = (VCUSum);

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
          <h4>{VCUTotal}</h4>
          <h2>{VCUS1}</h2>
              <h2>{VCUS2}</h2>
              <h2>{VCUS3}</h2>
              <h2>{VCUS4}</h2>
              <h2>{VCUS5}</h2>
              <h2>{VCUS6}</h2>
              <h2>{VCUS7}</h2>
              <h2>{VCUS8}</h2>
              <h2>{VCUS9}</h2>
              <h2>{VCUS10}</h2>              
          </div>
          </div>
          </div>
        )
}