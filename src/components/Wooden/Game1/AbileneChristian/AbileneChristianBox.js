import {generateAbileneChristianNames, AbileneChristianComponent} from './AbileneChristianNames';
import { default as SanJoseStateTotalG1 } from '../SanJoseState/SanJoseStateBox';

var AbileneChristianG1S1 = Math.floor((Math.random() * 50) + 0);
var AbileneChristianG1S2 = Math.floor((Math.random() * 20) + 0);
var AbileneChristianG1S3 = Math.floor((Math.random() * 20) + 0);
var AbileneChristianG1S4 = Math.floor((Math.random() * 15) + 0);
var AbileneChristianG1S5 = Math.floor((Math.random() * 15) + 0);
var AbileneChristianG1S6 = Math.floor((Math.random() * 5) + 0);
var AbileneChristianG1S7 = Math.floor((Math.random() * 5) + 0);
var AbileneChristianG1S8 = Math.floor((Math.random() * 5) + 0);
var AbileneChristianG1S9 = Math.floor((Math.random() * 5) + 0);
var AbileneChristianG1S10 = Math.floor((Math.random() * 5) + 0);

var AbileneChristianScores = [AbileneChristianG1S1, AbileneChristianG1S2, AbileneChristianG1S3, AbileneChristianG1S4, AbileneChristianG1S5, AbileneChristianG1S6, AbileneChristianG1S7, AbileneChristianG1S8, AbileneChristianG1S9, AbileneChristianG1S10];

let AbileneChristianSumG1 = AbileneChristianScores.reduce(function(a, b) {
  return a + b;
});
var AbileneChristianTotalG1 = (AbileneChristianSumG1);

if (SanJoseStateTotalG1 === AbileneChristianTotalG1) {
  AbileneChristianG1S1 = AbileneChristianG1S1 + Math.floor((Math.random() * 5) + 0);
  AbileneChristianG1S2 = AbileneChristianG1S2 + Math.floor((Math.random() * 5) + 0);
  AbileneChristianG1S3 = AbileneChristianG1S3 + Math.floor((Math.random() * 5) + 0);
  AbileneChristianG1S4 = AbileneChristianG1S4 + Math.floor((Math.random() * 5) + 0);
  AbileneChristianG1S5 = AbileneChristianG1S5 + Math.floor((Math.random() * 5) + 0);
}

export default function AbileneChristianBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Abilene Christian</h4>
          <div className="row">
            <div className="col-sm">
            <h2><AbileneChristianComponent generateAbileneChristianNames={generateAbileneChristianNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{AbileneChristianTotalG1}</h4>
          <h2>{AbileneChristianG1S1}</h2>
              <h2>{AbileneChristianG1S2}</h2>
              <h2>{AbileneChristianG1S3}</h2>
              <h2>{AbileneChristianG1S4}</h2>
              <h2>{AbileneChristianG1S5}</h2>
              <h2>{AbileneChristianG1S6}</h2>
              <h2>{AbileneChristianG1S7}</h2>
              <h2>{AbileneChristianG1S8}</h2>
              <h2>{AbileneChristianG1S9}</h2>
              <h2>{AbileneChristianG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}