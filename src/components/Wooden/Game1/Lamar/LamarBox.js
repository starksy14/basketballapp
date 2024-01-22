import {generateLamarNames, LamarComponent} from './LamarNames';
var LamarG1S1 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
var LamarG1S2 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var LamarG1S3 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var LamarG1S4 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var LamarG1S5 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var LamarG1S6 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var LamarG1S7 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var LamarG1S8 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var LamarG1S9 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var LamarG1S10 = Math.floor(Math.random() * (5 - 0 + 1) + 0);

var LamarScores = [LamarG1S1, LamarG1S2, LamarG1S3, LamarG1S4, LamarG1S5, LamarG1S6, LamarG1S7, LamarG1S8, LamarG1S9, LamarG1S10];

let LamarSumG1 = LamarScores.reduce(function(a, b) {
  return a + b;
});
var LamarTotalG1 = (LamarSumG1);


export default function LamarBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Lamar</h4>
          <div className="row">
            <div className="col-sm">
            <h2><LamarComponent generateLamarNames={generateLamarNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{LamarTotalG1}</h4>
          <h2>{LamarG1S1}</h2>
              <h2>{LamarG1S2}</h2>
              <h2>{LamarG1S3}</h2>
              <h2>{LamarG1S4}</h2>
              <h2>{LamarG1S5}</h2>
              <h2>{LamarG1S6}</h2>
              <h2>{LamarG1S7}</h2>
              <h2>{LamarG1S8}</h2>
              <h2>{LamarG1S9}</h2>
              <h2>{LamarG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}