import {generateEvansvilleNames, EvansvilleComponent} from './EvansvilleNames';
var EvansvilleS1 = Math.floor((Math.random() * 28) + 0);
var EvansvilleS2 = Math.floor((Math.random() * 26) + 0);
var EvansvilleS3 = Math.floor((Math.random() * 24) + 0);
var EvansvilleS4 = Math.floor((Math.random() * 22) + 0);
var EvansvilleS5 = Math.floor((Math.random() * 20) + 0);
var EvansvilleS6 = Math.floor((Math.random() * 10) + 0);
var EvansvilleS7 = Math.floor((Math.random() * 10) + 0);
var EvansvilleS8 = Math.floor((Math.random() * 10) + 0);
var EvansvilleS9 = Math.floor((Math.random() * 10) + 0);
var EvansvilleS10 = Math.floor((Math.random() * 10) + 0);

var EvansvilleScores = [EvansvilleS1, EvansvilleS2, EvansvilleS3, EvansvilleS4, EvansvilleS5, EvansvilleS6, EvansvilleS7, EvansvilleS8, EvansvilleS9, EvansvilleS10];

let EvansvilleSum = EvansvilleScores.reduce(function(a, b) {
  return a + b;
});
var EvansvilleTotal = (EvansvilleSum);

export default function EvansvilleBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Evansville</h4>
          <div className="row">
            <div className="col-sm">
            <h2><EvansvilleComponent generateEvansvilleNames={generateEvansvilleNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{EvansvilleTotal}</h4>
          <h2>{EvansvilleS1}</h2>
              <h2>{EvansvilleS2}</h2>
              <h2>{EvansvilleS3}</h2>
              <h2>{EvansvilleS4}</h2>
              <h2>{EvansvilleS5}</h2>
              <h2>{EvansvilleS6}</h2>
              <h2>{EvansvilleS7}</h2>
              <h2>{EvansvilleS8}</h2>
              <h2>{EvansvilleS9}</h2>
              <h2>{EvansvilleS10}</h2>              
          </div>
          </div>
          </div>
        )
}