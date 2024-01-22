import {generateSouthCarolinaNames, SouthCarolinaComponent} from './SouthCarolinaNames';
var SouthCarolinaG1S1 = Math.floor((Math.random() * 30) + 0);
var SouthCarolinaG1S2 = Math.floor((Math.random() * 28) + 0);
var SouthCarolinaG1S3 = Math.floor((Math.random() * 26) + 0);
var SouthCarolinaG1S4 = Math.floor((Math.random() * 24) + 0);
var SouthCarolinaG1S5 = Math.floor((Math.random() * 22) + 0);
var SouthCarolinaG1S6 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaG1S7 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaG1S8 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaG1S9 = Math.floor((Math.random() * 10) + 0);
var SouthCarolinaG1S10 = Math.floor((Math.random() * 10) + 0);

var SouthCarolinaG1Scores = [SouthCarolinaG1S1, SouthCarolinaG1S2, SouthCarolinaG1S3, SouthCarolinaG1S4, SouthCarolinaG1S5, SouthCarolinaG1S6, SouthCarolinaG1S7, SouthCarolinaG1S8, SouthCarolinaG1S9, SouthCarolinaG1S10];

let SouthCarolinaG1Sum = SouthCarolinaG1Scores.reduce(function(a, b) {
  return a + b;
});
var SouthCarolinaG1Total = (SouthCarolinaG1Sum);


export default function SouthCarolinaBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>South Carolina</h4>
          <div className="row">
            <div className="col-sm">
            <h2><SouthCarolinaComponent generateSouthCarolinaNames={generateSouthCarolinaNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{SouthCarolinaG1Total}</h4>
          <h2>{SouthCarolinaG1S1}</h2>
              <h2>{SouthCarolinaG1S2}</h2>
              <h2>{SouthCarolinaG1S3}</h2>
              <h2>{SouthCarolinaG1S4}</h2>
              <h2>{SouthCarolinaG1S5}</h2>
              <h2>{SouthCarolinaG1S6}</h2>
              <h2>{SouthCarolinaG1S7}</h2>
              <h2>{SouthCarolinaG1S8}</h2>
              <h2>{SouthCarolinaG1S9}</h2>
              <h2>{SouthCarolinaG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}