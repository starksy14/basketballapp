import {generateWashingtonNames, WashingtonComponent} from './WashingtonNames';
var WashingtonG1S1 = Math.floor((Math.random() * 30) + 0);
var WashingtonG1S2 = Math.floor((Math.random() * 28) + 0);
var WashingtonG1S3 = Math.floor((Math.random() * 26) + 0);
var WashingtonG1S4 = Math.floor((Math.random() * 24) + 0);
var WashingtonG1S5 = Math.floor((Math.random() * 22) + 0);
var WashingtonG1S6 = Math.floor((Math.random() * 10) + 0);
var WashingtonG1S7 = Math.floor((Math.random() * 10) + 0);
var WashingtonG1S8 = Math.floor((Math.random() * 10) + 0);
var WashingtonG1S9 = Math.floor((Math.random() * 10) + 0);
var WashingtonG1S10 = Math.floor((Math.random() * 10) + 0);

var WashingtonG1Scores = [WashingtonG1S1, WashingtonG1S2, WashingtonG1S3, WashingtonG1S4, WashingtonG1S5, WashingtonG1S6, WashingtonG1S7, WashingtonG1S8, WashingtonG1S9, WashingtonG1S10];

let WashingtonG1Sum = WashingtonG1Scores.reduce(function(a, b) {
  return a + b;
});
var WashingtonG1Total = (WashingtonG1Sum);


export default function WashingtonBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>South Carolina</h4>
          <div className="row">
            <div className="col-sm">
            <h2><WashingtonComponent generateWashingtonNames={generateWashingtonNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{WashingtonG1Total}</h4>
          <h2>{WashingtonG1S1}</h2>
              <h2>{WashingtonG1S2}</h2>
              <h2>{WashingtonG1S3}</h2>
              <h2>{WashingtonG1S4}</h2>
              <h2>{WashingtonG1S5}</h2>
              <h2>{WashingtonG1S6}</h2>
              <h2>{WashingtonG1S7}</h2>
              <h2>{WashingtonG1S8}</h2>
              <h2>{WashingtonG1S9}</h2>
              <h2>{WashingtonG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}