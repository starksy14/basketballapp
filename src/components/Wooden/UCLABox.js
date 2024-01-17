import {generateUCLANames, UCLAComponent} from './UCLANames';
var UCLAS1 = Math.floor((Math.random() * 28) + 0);
var UCLAS2 = Math.floor((Math.random() * 26) + 0);
var UCLAS3 = Math.floor((Math.random() * 24) + 0);
var UCLAS4 = Math.floor((Math.random() * 22) + 0);
var UCLAS5 = Math.floor((Math.random() * 20) + 0);
var UCLAS6 = Math.floor((Math.random() * 10) + 0);
var UCLAS7 = Math.floor((Math.random() * 10) + 0);
var UCLAS8 = Math.floor((Math.random() * 10) + 0);
var UCLAS9 = Math.floor((Math.random() * 10) + 0);
var UCLAS10 = Math.floor((Math.random() * 10) + 0);

var UCLAScores = [UCLAS1, UCLAS2, UCLAS3, UCLAS4, UCLAS5, UCLAS6, UCLAS7, UCLAS8, UCLAS9, UCLAS10];

let UCLASum = UCLAScores.reduce(function(a, b) {
  return a + b;
});
var UCLATotal = (UCLASum);

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
        )
}