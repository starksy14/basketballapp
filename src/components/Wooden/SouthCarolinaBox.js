import {generateSouthCarolinaNames, SouthCarolinaComponent} from './SouthCarolinaNames';
var SouthCarolinaS1 = Math.floor((Math.random() * 28) + 0);
var SouthCarolinaS2 = Math.floor((Math.random() * 26) + 0);
var SouthCarolinaS3 = Math.floor((Math.random() * 24) + 0);
var SouthCarolinaS4 = Math.floor((Math.random() * 22) + 0);
var SouthCarolinaS5 = Math.floor((Math.random() * 20) + 0);
var SouthCarolinaS6 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaS7 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaS8 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaS9 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaS10 = Math.floor((Math.random() * 10) + 0);

var SouthCarolinaScores = [SouthCarolinaS1, SouthCarolinaS2, SouthCarolinaS3, SouthCarolinaS4, SouthCarolinaS5, SouthCarolinaS6, SouthCarolinaS7, SouthCarolinaS8, SouthCarolinaS9, SouthCarolinaS10];

let SouthCarolinaSum = SouthCarolinaScores.reduce(function(a, b) {
  return a + b;
});
var SouthCarolinaTotal = (SouthCarolinaSum);

export default function SouthCarolinaBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>SouthCarolina</h4>
          <div className="row">
            <div className="col-sm">
            <h2><SouthCarolinaComponent generateSouthCarolinaNames={generateSouthCarolinaNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{SouthCarolinaTotal}</h4>
          <h2>{SouthCarolinaS1}</h2>
              <h2>{SouthCarolinaS2}</h2>
              <h2>{SouthCarolinaS3}</h2>
              <h2>{SouthCarolinaS4}</h2>
              <h2>{SouthCarolinaS5}</h2>
              <h2>{SouthCarolinaS6}</h2>
              <h2>{SouthCarolinaS7}</h2>
              <h2>{SouthCarolinaS8}</h2>
              <h2>{SouthCarolinaS9}</h2>
              <h2>{SouthCarolinaS10}</h2>              
          </div>
          </div>
          </div>
        )
}