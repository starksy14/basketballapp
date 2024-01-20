import {generateTexasNames, TexasComponent} from './TexasNames';
var TexasG1S1 = Math.floor((Math.random() * 30) + 0);
var TexasG1S2 = Math.floor((Math.random() * 28) + 0);
var TexasG1S3 = Math.floor((Math.random() * 26) + 0);
var TexasG1S4 = Math.floor((Math.random() * 24) + 0);
var TexasG1S5 = Math.floor((Math.random() * 22) + 0);
var TexasG1S6 = Math.floor((Math.random() * 10) + 0);
var TexasG1S7 = Math.floor((Math.random() * 10) + 0);
var TexasG1S8 = Math.floor((Math.random() * 10) + 0);
var TexasG1S9 = Math.floor((Math.random() * 10) + 0);
var TexasG1S10 = Math.floor((Math.random() * 10) + 0);

var TexasScores = [TexasG1S1, TexasG1S2, TexasG1S3, TexasG1S4, TexasG1S5, TexasG1S6, TexasG1S7, TexasG1S8, TexasG1S9, TexasG1S10];

let TexasSumG1 = TexasScores.reduce(function(a, b) {
  return a + b;
});
var TexasTotalG1 = (TexasSumG1);


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
          <h4>{TexasTotalG1}</h4>
          <h2>{TexasG1S1}</h2>
              <h2>{TexasG1S2}</h2>
              <h2>{TexasG1S3}</h2>
              <h2>{TexasG1S4}</h2>
              <h2>{TexasG1S5}</h2>
              <h2>{TexasG1S6}</h2>
              <h2>{TexasG1S7}</h2>
              <h2>{TexasG1S8}</h2>
              <h2>{TexasG1S9}</h2>
              <h2>{TexasG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}