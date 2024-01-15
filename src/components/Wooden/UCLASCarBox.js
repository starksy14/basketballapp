import {generateUCLANames, UCLAComponent} from './UCLANames';
import {generateSouthCarolinaNames, SouthCarolinaComponent} from './SouthCarolinaNames';


var UCLAS1 = Math.floor((Math.random() * 25) + 0);
var UCLAS2 = Math.floor((Math.random() * 25) + 0);
var UCLAS3 = Math.floor((Math.random() * 25) + 0);
var UCLAS4 = Math.floor((Math.random() * 25) + 0);
var UCLAS5 = Math.floor((Math.random() * 25) + 0);
var UCLAS6 = Math.floor((Math.random() * 10) + 0);
var UCLAS7 = Math.floor((Math.random() * 10) + 0);
var UCLAS8 = Math.floor((Math.random() * 10) + 0);
var UCLAS9 = Math.floor((Math.random() * 10) + 0);
var UCLAS10 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaS1 = Math.floor((Math.random() * 25) + 0);
var SouthCarolinaS2 = Math.floor((Math.random() * 25) + 0);
var SouthCarolinaS3 = Math.floor((Math.random() * 25) + 0);
var SouthCarolinaS4 = Math.floor((Math.random() * 25) + 0);
var SouthCarolinaS5 = Math.floor((Math.random() * 25) + 0);
var SouthCarolinaS6 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaS7 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaS8 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaS9 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaS10 = Math.floor((Math.random() * 10) + 0);

var UCLAScores = [UCLAS1, UCLAS2, UCLAS3, UCLAS4, UCLAS5, UCLAS6, UCLAS7, UCLAS8, UCLAS9, UCLAS10];
var SouthCarolinaScores = [SouthCarolinaS1, SouthCarolinaS2, SouthCarolinaS3, SouthCarolinaS4, SouthCarolinaS5, SouthCarolinaS6, SouthCarolinaS7, SouthCarolinaS8, SouthCarolinaS9, SouthCarolinaS10];

let UCLASum = UCLAScores.reduce(function(a, b) {
  return a + b;
});
var UCLATotal = (UCLASum);
let SouthCarolinaSum = SouthCarolinaScores.reduce(function(a, b) {
  return a + b;
});
var SouthCarolinaTotal = (SouthCarolinaSum);
if (UCLATotal === SouthCarolinaTotal) {
  UCLATotal = UCLATotal + 2;
}
export default function UCLASouthCarolinaBox() {
  return (
    <div>
  <center><h1>Game 1: South Carolina vs. UCLA</h1></center>

      <div className="grid-container">
        <div className="col-sm">
          <h4>South Carolina</h4>
          <div className="row">
            <div className="col-sm">
            <h2><SouthCarolinaComponent generateSouthCarolinaNames={generateSouthCarolinaNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{SouthCarolinaTotal}</h4>
          <h2>{SouthCarolinaS1}</h2>
              <h2>{SouthCarolinaS2}</h2>
              <h2>{SouthCarolinaS3}</h2>
              <h2>{SouthCarolinaS4}</h2>
              <h2>{SouthCarolinaS5}</h2>
              <h2>{SouthCarolinaS6}</h2>
              <h2>{SouthCarolinaS7}</h2>
              <h2>{SouthCarolinaS8}</h2>
              <h2>{SouthCarolinaS9}</h2>
              <h2>{SouthCarolinaS10}</h2>              
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            </div>
            </div>
            <div className="row">
          <div className="col-sm">
            </div>
            </div>
        <div className="row">
          <div className="col-sm">
          <h4>UCLA</h4>
          <h2><UCLAComponent generateUCLANames={generateUCLANames} /></h2>
            </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{UCLATotal}</h4>
          <h2>{UCLAS1}</h2>
              <h2>{UCLAS2}</h2>
              <h2>{UCLAS3}</h2>
              <h2>{UCLAS4}</h2>
              <h2>{UCLAS5}</h2>
              <h2>{UCLAS6}</h2>
              <h2>{UCLAS7}</h2>
              <h2>{UCLAS8}</h2>
              <h2>{UCLAS9}</h2>
              <h2>{UCLAS10}</h2>      
          
            </div>
        </div>
        </div>
        </div>
  )
}
