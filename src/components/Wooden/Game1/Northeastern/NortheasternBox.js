import {generateNortheasternNames, NortheasternComponent} from './NortheasternNames';
var NortheasternG1S1 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
var NortheasternG1S2 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var NortheasternG1S3 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var NortheasternG1S4 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var NortheasternG1S5 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var NortheasternG1S6 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var NortheasternG1S7 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var NortheasternG1S8 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var NortheasternG1S9 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
var NortheasternG1S10 = Math.floor(Math.random() * (5 - 0 + 1) + 0);

var NortheasternScores = [NortheasternG1S1, NortheasternG1S2, NortheasternG1S3, NortheasternG1S4, NortheasternG1S5, NortheasternG1S6, NortheasternG1S7, NortheasternG1S8, NortheasternG1S9, NortheasternG1S10];

let NortheasternSumG1 = NortheasternScores.reduce(function(a, b) {
  return a + b;
});
var NortheasternTotalG1 = (NortheasternSumG1);


export default function NortheasternBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Northeastern</h4>
          <div className="row">
            <div className="col-sm">
            <h2><NortheasternComponent generateNortheasternNames={generateNortheasternNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{NortheasternTotalG1}</h4>
          <h2>{NortheasternG1S1}</h2>
              <h2>{NortheasternG1S2}</h2>
              <h2>{NortheasternG1S3}</h2>
              <h2>{NortheasternG1S4}</h2>
              <h2>{NortheasternG1S5}</h2>
              <h2>{NortheasternG1S6}</h2>
              <h2>{NortheasternG1S7}</h2>
              <h2>{NortheasternG1S8}</h2>
              <h2>{NortheasternG1S9}</h2>
              <h2>{NortheasternG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}