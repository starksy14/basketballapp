import {generateTexasNames, TexasComponent} from './TexasNames';
export { default as TexasTotal } from './TexasBox';
var TexasS1 = Math.floor((Math.random() * 28) + 0);
var TexasS2 = Math.floor((Math.random() * 26) + 0);
var TexasS3 = Math.floor((Math.random() * 24) + 0);
var TexasS4 = Math.floor((Math.random() * 22) + 0);
var TexasS5 = Math.floor((Math.random() * 20) + 0);
var TexasS6 = Math.floor((Math.random() * 10) + 0);
var TexasS7 = Math.floor((Math.random() * 10) + 0);
var TexasS8 = Math.floor((Math.random() * 10) + 0);
var TexasS9 = Math.floor((Math.random() * 10) + 0);
var TexasS10 = Math.floor((Math.random() * 10) + 0);

var TexasScores = [TexasS1, TexasS2, TexasS3, TexasS4, TexasS5, TexasS6, TexasS7, TexasS8, TexasS9, TexasS10];

let TexasSum = TexasScores.reduce(function(a, b) {
  return a + b;
});
var TexasTotal = (TexasSum);

export default function TexasBox() {
  return (
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
          </div>
        )
}