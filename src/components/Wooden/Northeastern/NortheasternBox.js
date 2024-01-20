import {generateNortheasternNames, NortheasternComponent} from './NortheasternNames';
var NortheasternS1 = Math.floor((Math.random() * 28) + 0);
var NortheasternS2 = Math.floor((Math.random() * 26) + 0);
var NortheasternS3 = Math.floor((Math.random() * 24) + 0);
var NortheasternS4 = Math.floor((Math.random() * 22) + 0);
var NortheasternS5 = Math.floor((Math.random() * 20) + 0);
var NortheasternS6 = Math.floor((Math.random() * 10) + 0);
var NortheasternS7 = Math.floor((Math.random() * 10) + 0);
var NortheasternS8 = Math.floor((Math.random() * 10) + 0);
var NortheasternS9 = Math.floor((Math.random() * 10) + 0);
var NortheasternS10 = Math.floor((Math.random() * 10) + 0);

var NortheasternScores = [NortheasternS1, NortheasternS2, NortheasternS3, NortheasternS4, NortheasternS5, NortheasternS6, NortheasternS7, NortheasternS8, NortheasternS9, NortheasternS10];

let NortheasternSum = NortheasternScores.reduce(function(a, b) {
  return a + b;
});
var NortheasternTotal = (NortheasternSum);

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
          <h4>{NortheasternTotal}</h4>
          <h2>{NortheasternS1}</h2>
              <h2>{NortheasternS2}</h2>
              <h2>{NortheasternS3}</h2>
              <h2>{NortheasternS4}</h2>
              <h2>{NortheasternS5}</h2>
              <h2>{NortheasternS6}</h2>
              <h2>{NortheasternS7}</h2>
              <h2>{NortheasternS8}</h2>
              <h2>{NortheasternS9}</h2>
              <h2>{NortheasternS10}</h2>              
          </div>
          </div>
          </div>
        )
}