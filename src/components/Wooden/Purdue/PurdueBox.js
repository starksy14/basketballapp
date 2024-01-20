import {generatePurdueNames, PurdueComponent} from './PurdueNames';
import { default as TexasTotalG1 } from '../Texas/TexasBox';
var PurdueG1S1 = Math.floor((Math.random() * 30) + 0);
var PurdueG1S2 = Math.floor((Math.random() * 28) + 0);
var PurdueG1S3 = Math.floor((Math.random() * 26) + 0);
var PurdueG1S4 = Math.floor((Math.random() * 24) + 0);
var PurdueG1S5 = Math.floor((Math.random() * 22) + 0);
var PurdueG1S6 = Math.floor((Math.random() * 10) + 0);
var PurdueG1S7 = Math.floor((Math.random() * 10) + 0);
var PurdueG1S8 = Math.floor((Math.random() * 10) + 0);
var PurdueG1S9 = Math.floor((Math.random() * 10) + 0);
var PurdueG1S10 = Math.floor((Math.random() * 10) + 0);

var PurdueScores = [PurdueG1S1, PurdueG1S2, PurdueG1S3, PurdueG1S4, PurdueG1S5, PurdueG1S6, PurdueG1S7, PurdueG1S8, PurdueG1S9, PurdueG1S10];

let PurdueSumG1 = PurdueScores.reduce(function(a, b) {
  return a + b;
});
var PurdueTotalG1 = (PurdueSumG1);

if (PurdueTotalG1 === TexasTotalG1) {
  PurdueTotalG1 = PurdueTotalG1 + 2;
}

export default function PurdueBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Purdue</h4>
          <div className="row">
            <div className="col-sm">
            <h2><PurdueComponent generatePurdueNames={generatePurdueNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{PurdueTotalG1}</h4>
          <h2>{PurdueG1S1}</h2>
              <h2>{PurdueG1S2}</h2>
              <h2>{PurdueG1S3}</h2>
              <h2>{PurdueG1S4}</h2>
              <h2>{PurdueG1S5}</h2>
              <h2>{PurdueG1S6}</h2>
              <h2>{PurdueG1S7}</h2>
              <h2>{PurdueG1S8}</h2>
              <h2>{PurdueG1S9}</h2>
              <h2>{PurdueG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}