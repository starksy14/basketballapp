import {generateHawaiiNames, HawaiiComponent} from './HawaiiNames';
var HawaiiG1S1 = Math.floor((Math.random() * 30) + 0);
var HawaiiG1S2 = Math.floor((Math.random() * 28) + 0);
var HawaiiG1S3 = Math.floor((Math.random() * 26) + 0);
var HawaiiG1S4 = Math.floor((Math.random() * 24) + 0);
var HawaiiG1S5 = Math.floor((Math.random() * 22) + 0);
var HawaiiG1S6 = Math.floor((Math.random() * 10) + 0);
var HawaiiG1S7 = Math.floor((Math.random() * 10) + 0);
var HawaiiG1S8 = Math.floor((Math.random() * 10) + 0);
var HawaiiG1S9 = Math.floor((Math.random() * 10) + 0);
var HawaiiG1S10 = Math.floor((Math.random() * 10) + 0);

var HawaiiScores = [HawaiiG1S1, HawaiiG1S2, HawaiiG1S3, HawaiiG1S4, HawaiiG1S5, HawaiiG1S6, HawaiiG1S7, HawaiiG1S8, HawaiiG1S9, HawaiiG1S10];

let HawaiiSumG1 = HawaiiScores.reduce(function(a, b) {
  return a + b;
});
var HawaiiTotalG1 = (HawaiiSumG1);


export default function HawaiiBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Hawaii</h4>
          <div className="row">
            <div className="col-sm">
            <h2><HawaiiComponent generateHawaiiNames={generateHawaiiNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{HawaiiTotalG1}</h4>
          <h2>{HawaiiG1S1}</h2>
              <h2>{HawaiiG1S2}</h2>
              <h2>{HawaiiG1S3}</h2>
              <h2>{HawaiiG1S4}</h2>
              <h2>{HawaiiG1S5}</h2>
              <h2>{HawaiiG1S6}</h2>
              <h2>{HawaiiG1S7}</h2>
              <h2>{HawaiiG1S8}</h2>
              <h2>{HawaiiG1S9}</h2>
              <h2>{HawaiiG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}