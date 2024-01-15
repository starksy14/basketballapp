import {generatePurdueNames, PurdueComponent} from './PurdueNames';
import { default as TexasTotal } from './TexasBox';
var PurdueS1 = Math.floor((Math.random() * 25) + 0);
var PurdueS2 = Math.floor((Math.random() * 25) + 0);
var PurdueS3 = Math.floor((Math.random() * 25) + 0);
var PurdueS4 = Math.floor((Math.random() * 25) + 0);
var PurdueS5 = Math.floor((Math.random() * 25) + 0);
var PurdueS6 = Math.floor((Math.random() * 10) + 0);
var PurdueS7 = Math.floor((Math.random() * 10) + 0);
var PurdueS8 = Math.floor((Math.random() * 10) + 0);
var PurdueS9 = Math.floor((Math.random() * 10) + 0);
var PurdueS10 = Math.floor((Math.random() * 10) + 0);

var PurdueScores = [PurdueS1, PurdueS2, PurdueS3, PurdueS4, PurdueS5, PurdueS6, PurdueS7, PurdueS8, PurdueS9, PurdueS10];

let PurdueSum = PurdueScores.reduce(function(a, b) {
  return a + b;
});
var PurdueTotal = (PurdueSum);

if (PurdueTotal === TexasTotal) {
  PurdueTotal = PurdueTotal + 2;
}

export default function PurdueTexasBox() {
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
          <h4>{PurdueTotal}</h4>
          <h2>{PurdueS1}</h2>
              <h2>{PurdueS2}</h2>
              <h2>{PurdueS3}</h2>
              <h2>{PurdueS4}</h2>
              <h2>{PurdueS5}</h2>
              <h2>{PurdueS6}</h2>
              <h2>{PurdueS7}</h2>
              <h2>{PurdueS8}</h2>
              <h2>{PurdueS9}</h2>
              <h2>{PurdueS10}</h2>      
              </div>
        </div>
        </div>
  )
}