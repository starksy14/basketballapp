import {generateSanJoseStateNames, SanJoseStateComponent} from './SanJoseStateNames';
import { default as AbileneChristianTotalG1 } from '../AbileneChristian/AbileneChristianBox';
var SanJoseStateG1S1 = Math.floor((Math.random() * 30) + 10);
var SanJoseStateG1S2 = Math.floor((Math.random() * 20) + 10);
var SanJoseStateG1S3 = Math.floor((Math.random() * 20) + 5);
var SanJoseStateG1S4 = Math.floor((Math.random() * 15) + 5);
var SanJoseStateG1S5 = Math.floor((Math.random() * 15) + 5);
var SanJoseStateG1S6 = Math.floor((Math.random() * 5) + 0);
var SanJoseStateG1S7 = Math.floor((Math.random() * 5) + 0);
var SanJoseStateG1S8 = Math.floor((Math.random() * 5) + 0);
var SanJoseStateG1S9 = Math.floor((Math.random() * 5) + 0);
var SanJoseStateG1S10 = Math.floor((Math.random() * 5) + 0);

var SanJoseStateScores = [SanJoseStateG1S1, SanJoseStateG1S2, SanJoseStateG1S3, SanJoseStateG1S4, SanJoseStateG1S5, SanJoseStateG1S6, SanJoseStateG1S7, SanJoseStateG1S8, SanJoseStateG1S9, SanJoseStateG1S10];

  let SanJoseStateSumG1 = SanJoseStateScores.reduce(function(a, b) {
    return a + b;
  });
  var SanJoseStateTotalG1 = (SanJoseStateSumG1);

while (SanJoseStateTotalG1 === AbileneChristianTotalG1) {
  SanJoseStateG1S1 = Math.floor((Math.random() * 30) + 10);
  SanJoseStateG1S2 = Math.floor((Math.random() * 20) + 10);
  SanJoseStateG1S3 = Math.floor((Math.random() * 20) + 5);
  SanJoseStateG1S4 = Math.floor((Math.random() * 15) + 5);
  SanJoseStateG1S5 = Math.floor((Math.random() * 15) + 5);
  SanJoseStateG1S6 = Math.floor((Math.random() * 5) + 0);
  SanJoseStateG1S7 = Math.floor((Math.random() * 5) + 0);
  SanJoseStateG1S8 = Math.floor((Math.random() * 5) + 0);
  SanJoseStateG1S9 = Math.floor((Math.random() * 5) + 0);
  SanJoseStateG1S10 = Math.floor((Math.random() * 5) + 0);
  
  SanJoseStateScores = [SanJoseStateG1S1, SanJoseStateG1S2, SanJoseStateG1S3, SanJoseStateG1S4, SanJoseStateG1S5, SanJoseStateG1S6, SanJoseStateG1S7, SanJoseStateG1S8, SanJoseStateG1S9, SanJoseStateG1S10];

  SanJoseStateSumG1 = SanJoseStateScores.reduce(function(a, b) {
    return a + b;
  });
  SanJoseStateTotalG1 = (SanJoseStateSumG1);
 
}

export default function SanJoseStateBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>San Jose State</h4>
          <div className="row">
            <div className="col-sm">
            <h2><SanJoseStateComponent generateSanJoseStateNames={generateSanJoseStateNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{SanJoseStateTotalG1}</h4>
          <h2>{SanJoseStateG1S1}</h2>
              <h2>{SanJoseStateG1S2}</h2>
              <h2>{SanJoseStateG1S3}</h2>
              <h2>{SanJoseStateG1S4}</h2>
              <h2>{SanJoseStateG1S5}</h2>
              <h2>{SanJoseStateG1S6}</h2>
              <h2>{SanJoseStateG1S7}</h2>
              <h2>{SanJoseStateG1S8}</h2>
              <h2>{SanJoseStateG1S9}</h2>
              <h2>{SanJoseStateG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}