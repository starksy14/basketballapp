import {generateSFAustinNames, SFAustinComponent} from './SFAustinNames';
import { default as SouthCarolinaG1Total } from './SouthCarolinaBox';

var SFAustinG1S1 = Math.floor((Math.random() * 30) + 0);
var SFAustinG1S2 = Math.floor((Math.random() * 28) + 0);
var SFAustinG1S3 = Math.floor((Math.random() * 26) + 0);
var SFAustinG1S4 = Math.floor((Math.random() * 24) + 0);
var SFAustinG1S5 = Math.floor((Math.random() * 22) + 0);
var SFAustinG1S6 = Math.floor((Math.random() * 10) + 0);
var SFAustinG1S7 = Math.floor((Math.random() * 10) + 0);
var SFAustinG1S8 = Math.floor((Math.random() * 10) + 0);
var SFAustinG1S9 = Math.floor((Math.random() * 10) + 0);
var SFAustinG1S10 = Math.floor((Math.random() * 10) + 0);

var SFAustinG1Scores = [SFAustinG1S1, SFAustinG1S2, SFAustinG1S3, SFAustinG1S4, SFAustinG1S5, SFAustinG1S6, SFAustinG1S7, SFAustinG1S8, SFAustinG1S9, SFAustinG1S10];

let SFAustinG1Sum = SFAustinG1Scores.reduce(function(a, b) {
  return a + b;
});
var SFAustinG1Total = (SFAustinG1Sum);

if (SFAustinG1Total === SouthCarolinaG1Total) {
  SFAustinG1Total = SFAustinG1Total + 2;
}

export default function SFAustinBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>SFAustin</h4>
          <div className="row">
            <div className="col-sm">
            <h2><SFAustinComponent generateSFAustinNames={generateSFAustinNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{SFAustinG1Total}</h4>
          <h2>{SFAustinG1S1}</h2>
              <h2>{SFAustinG1S2}</h2>
              <h2>{SFAustinG1S3}</h2>
              <h2>{SFAustinG1S4}</h2>
              <h2>{SFAustinG1S5}</h2>
              <h2>{SFAustinG1S6}</h2>
              <h2>{SFAustinG1S7}</h2>
              <h2>{SFAustinG1S8}</h2>
              <h2>{SFAustinG1S9}</h2>
              <h2>{SFAustinG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}