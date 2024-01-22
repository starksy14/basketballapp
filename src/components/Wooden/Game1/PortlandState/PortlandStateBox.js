import {generatePortlandStateNames, PortlandStateComponent} from './PortlandStateNames';
import { default as NorthernIllinoisTotalG1 } from '../NorthernIllinois/NorthernIllinoisBox';
var PortlandStateG1S1 = Math.floor((Math.random() * 30) + 0);
var PortlandStateG1S2 = Math.floor((Math.random() * 28) + 0);
var PortlandStateG1S3 = Math.floor((Math.random() * 26) + 0);
var PortlandStateG1S4 = Math.floor((Math.random() * 24) + 0);
var PortlandStateG1S5 = Math.floor((Math.random() * 22) + 0);
var PortlandStateG1S6 = Math.floor((Math.random() * 10) + 0);
var PortlandStateG1S7 = Math.floor((Math.random() * 10) + 0);
var PortlandStateG1S8 = Math.floor((Math.random() * 10) + 0);
var PortlandStateG1S9 = Math.floor((Math.random() * 10) + 0);
var PortlandStateG1S10 = Math.floor((Math.random() * 10) + 0);

var PortlandStateScores = [PortlandStateG1S1, PortlandStateG1S2, PortlandStateG1S3, PortlandStateG1S4, PortlandStateG1S5, PortlandStateG1S6, PortlandStateG1S7, PortlandStateG1S8, PortlandStateG1S9, PortlandStateG1S10];

let PortlandStateSumG1 = PortlandStateScores.reduce(function(a, b) {
  return a + b;
});
var PortlandStateTotalG1 = (PortlandStateSumG1);

if (PortlandStateTotalG1 === NorthernIllinoisTotalG1) {
  PortlandStateTotalG1 = PortlandStateTotalG1 + 2;
}

export default function PortlandStateBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Portland State</h4>
          <div className="row">
            <div className="col-sm">
            <h2><PortlandStateComponent generatePortlandStateNames={generatePortlandStateNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{PortlandStateTotalG1}</h4>
          <h2>{PortlandStateG1S1}</h2>
              <h2>{PortlandStateG1S2}</h2>
              <h2>{PortlandStateG1S3}</h2>
              <h2>{PortlandStateG1S4}</h2>
              <h2>{PortlandStateG1S5}</h2>
              <h2>{PortlandStateG1S6}</h2>
              <h2>{PortlandStateG1S7}</h2>
              <h2>{PortlandStateG1S8}</h2>
              <h2>{PortlandStateG1S9}</h2>
              <h2>{PortlandStateG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}