import {generatePurdueNames, PurdueComponent} from './PurdueNames';
import {generateTexasNames, TexasComponent} from './TexasNames';


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
var TexasS1 = Math.floor((Math.random() * 25) + 0);
var TexasS2 = Math.floor((Math.random() * 25) + 0);
var TexasS3 = Math.floor((Math.random() * 25) + 0);
var TexasS4 = Math.floor((Math.random() * 25) + 0);
var TexasS5 = Math.floor((Math.random() * 25) + 0);
var TexasS6 = Math.floor((Math.random() * 10) + 0);
var TexasS7 = Math.floor((Math.random() * 10) + 0);
var TexasS8 = Math.floor((Math.random() * 10) + 0);
var TexasS9 = Math.floor((Math.random() * 10) + 0);
var TexasS10 = Math.floor((Math.random() * 10) + 0);

var PurdueScores = [PurdueS1, PurdueS2, PurdueS3, PurdueS4, PurdueS5, PurdueS6, PurdueS7, PurdueS8, PurdueS9, PurdueS10];
var TexasScores = [TexasS1, TexasS2, TexasS3, TexasS4, TexasS5, TexasS6, TexasS7, TexasS8, TexasS9, TexasS10];

let PurdueSum = PurdueScores.reduce(function(a, b) {
  return a + b;
});
var PurdueTotal = (PurdueSum);
let TexasSum = TexasScores.reduce(function(a, b) {
  return a + b;
});
var TexasTotal = (TexasSum);
if (PurdueTotal === TexasTotal) {
  PurdueTotal = PurdueTotal + 2;
}
export default function PurdueTexasBox() {
  return (
    <div>
  <center><h1>Game 1: Texas vs. Purdue</h1></center>

      <div className="grid-container">
        <div className="col-sm">
          <h4>Texas</h4>
          <div className="row">
            <div className="col-sm">
            <h2><TexasComponent generateTexasNames={generateTexasNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{TexasTotal}</h4>
          <h2>{TexasS1}</h2>
              <h2>{TexasS2}</h2>
              <h2>{TexasS3}</h2>
              <h2>{TexasS4}</h2>
              <h2>{TexasS5}</h2>
              <h2>{TexasS6}</h2>
              <h2>{TexasS7}</h2>
              <h2>{TexasS8}</h2>
              <h2>{TexasS9}</h2>
              <h2>{TexasS10}</h2>              
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            </div>
            </div>
            <div className="row">
          <div className="col-sm">
            </div>
            </div>
        <div className="row">
          <div className="col-sm">
          <h4>Purdue</h4>
          <h2><PurdueComponent generatePurdueNames={generatePurdueNames} /></h2>
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
        </div>
  )
}
