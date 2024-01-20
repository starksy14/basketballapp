import {generateBryantNames, BryantComponent} from './BryantNames';
import { default as PennTotalG1 } from '../Penn/PennBox';
var BryantG1S1 = Math.floor((Math.random() * 30) + 0);
var BryantG1S2 = Math.floor((Math.random() * 28) + 0);
var BryantG1S3 = Math.floor((Math.random() * 26) + 0);
var BryantG1S4 = Math.floor((Math.random() * 24) + 0);
var BryantG1S5 = Math.floor((Math.random() * 22) + 0);
var BryantG1S6 = Math.floor((Math.random() * 10) + 0);
var BryantG1S7 = Math.floor((Math.random() * 10) + 0);
var BryantG1S8 = Math.floor((Math.random() * 10) + 0);
var BryantG1S9 = Math.floor((Math.random() * 10) + 0);
var BryantG1S10 = Math.floor((Math.random() * 10) + 0);

var BryantScores = [BryantG1S1, BryantG1S2, BryantG1S3, BryantG1S4, BryantG1S5, BryantG1S6, BryantG1S7, BryantG1S8, BryantG1S9, BryantG1S10];

let BryantSumG1 = BryantScores.reduce(function(a, b) {
  return a + b;
});
var BryantTotalG1 = (BryantSumG1);

if (BryantTotalG1 === PennTotalG1) {
  BryantTotalG1 = BryantTotalG1 + 2;
}

export default function BryantBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Bryant</h4>
          <div className="row">
            <div className="col-sm">
            <h2><BryantComponent generateBryantNames={generateBryantNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{BryantTotalG1}</h4>
          <h2>{BryantG1S1}</h2>
              <h2>{BryantG1S2}</h2>
              <h2>{BryantG1S3}</h2>
              <h2>{BryantG1S4}</h2>
              <h2>{BryantG1S5}</h2>
              <h2>{BryantG1S6}</h2>
              <h2>{BryantG1S7}</h2>
              <h2>{BryantG1S8}</h2>
              <h2>{BryantG1S9}</h2>
              <h2>{BryantG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}