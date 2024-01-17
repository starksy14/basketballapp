import {generatePennNames, PennComponent} from './PennNames';
var PennS1 = Math.floor((Math.random() * 28) + 0);
var PennS2 = Math.floor((Math.random() * 26) + 0);
var PennS3 = Math.floor((Math.random() * 24) + 0);
var PennS4 = Math.floor((Math.random() * 22) + 0);
var PennS5 = Math.floor((Math.random() * 20) + 0);
var PennS6 = Math.floor((Math.random() * 10) + 0);
var PennS7 = Math.floor((Math.random() * 10) + 0);
var PennS8 = Math.floor((Math.random() * 10) + 0);
var PennS9 = Math.floor((Math.random() * 10) + 0);
var PennS10 = Math.floor((Math.random() * 10) + 0);

var PennScores = [PennS1, PennS2, PennS3, PennS4, PennS5, PennS6, PennS7, PennS8, PennS9, PennS10];

let PennSum = PennScores.reduce(function(a, b) {
  return a + b;
});
var PennTotal = (PennSum);

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
          <h4>{PennTotal}</h4>
          <h2>{PennS1}</h2>
              <h2>{PennS2}</h2>
              <h2>{PennS3}</h2>
              <h2>{PennS4}</h2>
              <h2>{PennS5}</h2>
              <h2>{PennS6}</h2>
              <h2>{PennS7}</h2>
              <h2>{PennS8}</h2>
              <h2>{PennS9}</h2>
              <h2>{PennS10}</h2>              
          </div>
          </div>
          </div>
        )
}