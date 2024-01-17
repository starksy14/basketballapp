import {generateWashingtonNames, WashingtonComponent} from './WashingtonNames';
var WashingtonS1 = Math.floor((Math.random() * 28) + 0);
var WashingtonS2 = Math.floor((Math.random() * 26) + 0);
var WashingtonS3 = Math.floor((Math.random() * 24) + 0);
var WashingtonS4 = Math.floor((Math.random() * 22) + 0);
var WashingtonS5 = Math.floor((Math.random() * 20) + 0);
var WashingtonS6 = Math.floor((Math.random() * 10) + 0);
var WashingtonS7 = Math.floor((Math.random() * 10) + 0);
var WashingtonS8 = Math.floor((Math.random() * 10) + 0);
var WashingtonS9 = Math.floor((Math.random() * 10) + 0);
var WashingtonS10 = Math.floor((Math.random() * 10) + 0);

var WashingtonScores = [WashingtonS1, WashingtonS2, WashingtonS3, WashingtonS4, WashingtonS5, WashingtonS6, WashingtonS7, WashingtonS8, WashingtonS9, WashingtonS10];

let WashingtonSum = WashingtonScores.reduce(function(a, b) {
  return a + b;
});
var WashingtonTotal = (WashingtonSum);

export default function WashingtonBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Washington</h4>
          <div className="row">
            <div className="col-sm">
            <h2><WashingtonComponent generateWashingtonNames={generateWashingtonNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{WashingtonTotal}</h4>
          <h2>{WashingtonS1}</h2>
              <h2>{WashingtonS2}</h2>
              <h2>{WashingtonS3}</h2>
              <h2>{WashingtonS4}</h2>
              <h2>{WashingtonS5}</h2>
              <h2>{WashingtonS6}</h2>
              <h2>{WashingtonS7}</h2>
              <h2>{WashingtonS8}</h2>
              <h2>{WashingtonS9}</h2>
              <h2>{WashingtonS10}</h2>              
          </div>
          </div>
          </div>
        )
}