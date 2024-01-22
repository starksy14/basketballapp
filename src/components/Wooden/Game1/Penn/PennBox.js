import {generatePennNames, PennComponent} from './PennNames';
var PennG1S1 = Math.floor((Math.random() * 30) + 0);
var PennG1S2 = Math.floor((Math.random() * 28) + 0);
var PennG1S3 = Math.floor((Math.random() * 26) + 0);
var PennG1S4 = Math.floor((Math.random() * 24) + 0);
var PennG1S5 = Math.floor((Math.random() * 22) + 0);
var PennG1S6 = Math.floor((Math.random() * 10) + 0);
var PennG1S7 = Math.floor((Math.random() * 10) + 0);
var PennG1S8 = Math.floor((Math.random() * 10) + 0);
var PennG1S9 = Math.floor((Math.random() * 10) + 0);
var PennG1S10 = Math.floor((Math.random() * 10) + 0);

var PennScores = [PennG1S1, PennG1S2, PennG1S3, PennG1S4, PennG1S5, PennG1S6, PennG1S7, PennG1S8, PennG1S9, PennG1S10];

let PennSumG1 = PennScores.reduce(function(a, b) {
  return a + b;
});
var PennTotalG1 = (PennSumG1);


export default function PennBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Penn</h4>
          <div className="row">
            <div className="col-sm">
            <h2><PennComponent generatePennNames={generatePennNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{PennTotalG1}</h4>
          <h2>{PennG1S1}</h2>
              <h2>{PennG1S2}</h2>
              <h2>{PennG1S3}</h2>
              <h2>{PennG1S4}</h2>
              <h2>{PennG1S5}</h2>
              <h2>{PennG1S6}</h2>
              <h2>{PennG1S7}</h2>
              <h2>{PennG1S8}</h2>
              <h2>{PennG1S9}</h2>
              <h2>{PennG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}