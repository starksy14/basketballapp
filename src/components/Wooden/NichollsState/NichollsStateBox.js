import {generateNichollsStateNames, NichollsStateComponent} from './NichollsStateNames';
import { default as EvansvilleTotalG1 } from '../Evansville/EvansvilleBox';
var NichollsStateG1S1 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
var NichollsStateG1S2 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var NichollsStateG1S3 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var NichollsStateG1S4 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var NichollsStateG1S5 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var NichollsStateG1S6 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var NichollsStateG1S7 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var NichollsStateG1S8 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var NichollsStateG1S9 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var NichollsStateG1S10 = Math.floor(Math.random() * (5 - 0 + 1) + 0);

var NichollsStateScores = [NichollsStateG1S1, NichollsStateG1S2, NichollsStateG1S3, NichollsStateG1S4, NichollsStateG1S5, NichollsStateG1S6, NichollsStateG1S7, NichollsStateG1S8, NichollsStateG1S9, NichollsStateG1S10];

let NichollsStateSumG1 = NichollsStateScores.reduce(function(a, b) {
  return a + b;
});
var NichollsStateTotalG1 = (NichollsStateSumG1);

if (NichollsStateTotalG1 === EvansvilleTotalG1) {
  NichollsStateG1S10 = 6;
}

export default function NichollsStateBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Nicholls State</h4>
          <div className="row">
            <div className="col-sm">
            <h2><NichollsStateComponent generateNichollsStateNames={generateNichollsStateNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{NichollsStateTotalG1}</h4>
          <h2>{NichollsStateG1S1}</h2>
              <h2>{NichollsStateG1S2}</h2>
              <h2>{NichollsStateG1S3}</h2>
              <h2>{NichollsStateG1S4}</h2>
              <h2>{NichollsStateG1S5}</h2>
              <h2>{NichollsStateG1S6}</h2>
              <h2>{NichollsStateG1S7}</h2>
              <h2>{NichollsStateG1S8}</h2>
              <h2>{NichollsStateG1S9}</h2>
              <h2>{NichollsStateG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}