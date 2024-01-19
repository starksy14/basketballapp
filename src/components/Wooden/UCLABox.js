import {generateUCLANames, UCLAComponent} from './UCLANames';
import { default as SouthCarolinaG1Total } from './SouthCarolinaBox';

var UCLAG1S1 = Math.floor((Math.random() * 30) + 0);
var UCLAG1S2 = Math.floor((Math.random() * 28) + 0);
var UCLAG1S3 = Math.floor((Math.random() * 26) + 0);
var UCLAG1S4 = Math.floor((Math.random() * 24) + 0);
var UCLAG1S5 = Math.floor((Math.random() * 22) + 0);
var UCLAG1S6 = Math.floor((Math.random() * 10) + 0);
var UCLAG1S7 = Math.floor((Math.random() * 10) + 0);
var UCLAG1S8 = Math.floor((Math.random() * 10) + 0);
var UCLAG1S9 = Math.floor((Math.random() * 10) + 0);
var UCLAG1S10 = Math.floor((Math.random() * 10) + 0);

var UCLAG1Scores = [UCLAG1S1, UCLAG1S2, UCLAG1S3, UCLAG1S4, UCLAG1S5, UCLAG1S6, UCLAG1S7, UCLAG1S8, UCLAG1S9, UCLAG1S10];

let UCLAG1Sum = UCLAG1Scores.reduce(function(a, b) {
  return a + b;
});
var UCLAG1Total = (UCLAG1Sum);

if (UCLAG1Total === SouthCarolinaG1Total) {
  UCLAG1Total = UCLAG1Total + 2;
}

export default function UCLABox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>UCLA</h4>
          <div className="row">
            <div className="col-sm">
            <h2><UCLAComponent generateUCLANames={generateUCLANames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{UCLAG1Total}</h4>
          <h2>{UCLAG1S1}</h2>
              <h2>{UCLAG1S2}</h2>
              <h2>{UCLAG1S3}</h2>
              <h2>{UCLAG1S4}</h2>
              <h2>{UCLAG1S5}</h2>
              <h2>{UCLAG1S6}</h2>
              <h2>{UCLAG1S7}</h2>
              <h2>{UCLAG1S8}</h2>
              <h2>{UCLAG1S9}</h2>
              <h2>{UCLAG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}