import {generateMaristNames, MaristComponent} from './MaristNames';
var MaristS1 = Math.floor((Math.random() * 28) + 0);
var MaristS2 = Math.floor((Math.random() * 26) + 0);
var MaristS3 = Math.floor((Math.random() * 24) + 0);
var MaristS4 = Math.floor((Math.random() * 22) + 0);
var MaristS5 = Math.floor((Math.random() * 20) + 0);
var MaristS6 = Math.floor((Math.random() * 10) + 0);
var MaristS7 = Math.floor((Math.random() * 10) + 0);
var MaristS8 = Math.floor((Math.random() * 10) + 0);
var MaristS9 = Math.floor((Math.random() * 10) + 0);
var MaristS10 = Math.floor((Math.random() * 10) + 0);

var MaristScores = [MaristS1, MaristS2, MaristS3, MaristS4, MaristS5, MaristS6, MaristS7, MaristS8, MaristS9, MaristS10];

let MaristSum = MaristScores.reduce(function(a, b) {
  return a + b;
});
var MaristTotal = (MaristSum);

export default function MaristBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Marist</h4>
          <div className="row">
            <div className="col-sm">
            <h2><MaristComponent generateMaristNames={generateMaristNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{MaristTotal}</h4>
          <h2>{MaristS1}</h2>
              <h2>{MaristS2}</h2>
              <h2>{MaristS3}</h2>
              <h2>{MaristS4}</h2>
              <h2>{MaristS5}</h2>
              <h2>{MaristS6}</h2>
              <h2>{MaristS7}</h2>
              <h2>{MaristS8}</h2>
              <h2>{MaristS9}</h2>
              <h2>{MaristS10}</h2>              
          </div>
          </div>
          </div>
        )
}