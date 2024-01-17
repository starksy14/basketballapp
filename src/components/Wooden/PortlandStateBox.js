import {generatePortlandStateNames, PortlandStateComponent} from './PortlandStateNames';
var PortlandStateS1 = Math.floor((Math.random() * 28) + 0);
var PortlandStateS2 = Math.floor((Math.random() * 26) + 0);
var PortlandStateS3 = Math.floor((Math.random() * 24) + 0);
var PortlandStateS4 = Math.floor((Math.random() * 22) + 0);
var PortlandStateS5 = Math.floor((Math.random() * 20) + 0);
var PortlandStateS6 = Math.floor((Math.random() * 10) + 0);
var PortlandStateS7 = Math.floor((Math.random() * 10) + 0);
var PortlandStateS8 = Math.floor((Math.random() * 10) + 0);
var PortlandStateS9 = Math.floor((Math.random() * 10) + 0);
var PortlandStateS10 = Math.floor((Math.random() * 10) + 0);

var PortlandStateScores = [PortlandStateS1, PortlandStateS2, PortlandStateS3, PortlandStateS4, PortlandStateS5, PortlandStateS6, PortlandStateS7, PortlandStateS8, PortlandStateS9, PortlandStateS10];

let PortlandStateSum = PortlandStateScores.reduce(function(a, b) {
  return a + b;
});
var PortlandStateTotal = (PortlandStateSum);

export default function PortlandStateBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>PortlandState</h4>
          <div className="row">
            <div className="col-sm">
            <h2><PortlandStateComponent generatePortlandStateNames={generatePortlandStateNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{PortlandStateTotal}</h4>
          <h2>{PortlandStateS1}</h2>
              <h2>{PortlandStateS2}</h2>
              <h2>{PortlandStateS3}</h2>
              <h2>{PortlandStateS4}</h2>
              <h2>{PortlandStateS5}</h2>
              <h2>{PortlandStateS6}</h2>
              <h2>{PortlandStateS7}</h2>
              <h2>{PortlandStateS8}</h2>
              <h2>{PortlandStateS9}</h2>
              <h2>{PortlandStateS10}</h2>              
          </div>
          </div>
          </div>
        )
}