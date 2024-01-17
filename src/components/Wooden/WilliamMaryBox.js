import {generateWilliamMaryNames, WilliamMaryComponent} from './WilliamMaryNames';
var WilliamMaryS1 = Math.floor((Math.random() * 28) + 0);
var WilliamMaryS2 = Math.floor((Math.random() * 26) + 0);
var WilliamMaryS3 = Math.floor((Math.random() * 24) + 0);
var WilliamMaryS4 = Math.floor((Math.random() * 22) + 0);
var WilliamMaryS5 = Math.floor((Math.random() * 20) + 0);
var WilliamMaryS6 = Math.floor((Math.random() * 10) + 0);
var WilliamMaryS7 = Math.floor((Math.random() * 10) + 0);
var WilliamMaryS8 = Math.floor((Math.random() * 10) + 0);
var WilliamMaryS9 = Math.floor((Math.random() * 10) + 0);
var WilliamMaryS10 = Math.floor((Math.random() * 10) + 0);

var WilliamMaryScores = [WilliamMaryS1, WilliamMaryS2, WilliamMaryS3, WilliamMaryS4, WilliamMaryS5, WilliamMaryS6, WilliamMaryS7, WilliamMaryS8, WilliamMaryS9, WilliamMaryS10];

let WilliamMarySum = WilliamMaryScores.reduce(function(a, b) {
  return a + b;
});
var WilliamMaryTotal = (WilliamMarySum);

export default function WilliamMaryBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>WilliamMary</h4>
          <div className="row">
            <div className="col-sm">
            <h2><WilliamMaryComponent generateWilliamMaryNames={generateWilliamMaryNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{WilliamMaryTotal}</h4>
          <h2>{WilliamMaryS1}</h2>
              <h2>{WilliamMaryS2}</h2>
              <h2>{WilliamMaryS3}</h2>
              <h2>{WilliamMaryS4}</h2>
              <h2>{WilliamMaryS5}</h2>
              <h2>{WilliamMaryS6}</h2>
              <h2>{WilliamMaryS7}</h2>
              <h2>{WilliamMaryS8}</h2>
              <h2>{WilliamMaryS9}</h2>
              <h2>{WilliamMaryS10}</h2>              
          </div>
          </div>
          </div>
        )
}