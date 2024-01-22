import {generateNorthernIllinoisNames, NorthernIllinoisComponent} from './NorthernIllinoisNames';
var NorthernIllinoisG1S1 = Math.floor((Math.random() * 30) + 0);
var NorthernIllinoisG1S2 = Math.floor((Math.random() * 28) + 0);
var NorthernIllinoisG1S3 = Math.floor((Math.random() * 26) + 0);
var NorthernIllinoisG1S4 = Math.floor((Math.random() * 24) + 0);
var NorthernIllinoisG1S5 = Math.floor((Math.random() * 22) + 0);
var NorthernIllinoisG1S6 = Math.floor((Math.random() * 10) + 0);
var NorthernIllinoisG1S7 = Math.floor((Math.random() * 10) + 0);
var NorthernIllinoisG1S8 = Math.floor((Math.random() * 10) + 0);
var NorthernIllinoisG1S9 = Math.floor((Math.random() * 10) + 0);
var NorthernIllinoisG1S10 = Math.floor((Math.random() * 10) + 0);

var NorthernIllinoisScores = [NorthernIllinoisG1S1, NorthernIllinoisG1S2, NorthernIllinoisG1S3, NorthernIllinoisG1S4, NorthernIllinoisG1S5, NorthernIllinoisG1S6, NorthernIllinoisG1S7, NorthernIllinoisG1S8, NorthernIllinoisG1S9, NorthernIllinoisG1S10];

let NorthernIllinoisSumG1 = NorthernIllinoisScores.reduce(function(a, b) {
  return a + b;
});
var NorthernIllinoisTotalG1 = (NorthernIllinoisSumG1);


export default function NorthernIllinoisBox() {
  return (
      <div className="grid-container">
        <div className="col-sm">
          <h4>Northern Illinois</h4>
          <div className="row">
            <div className="col-sm">
            <h2><NorthernIllinoisComponent generateNorthernIllinoisNames={generateNorthernIllinoisNames} /></h2>
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <h4>{NorthernIllinoisTotalG1}</h4>
          <h2>{NorthernIllinoisG1S1}</h2>
              <h2>{NorthernIllinoisG1S2}</h2>
              <h2>{NorthernIllinoisG1S3}</h2>
              <h2>{NorthernIllinoisG1S4}</h2>
              <h2>{NorthernIllinoisG1S5}</h2>
              <h2>{NorthernIllinoisG1S6}</h2>
              <h2>{NorthernIllinoisG1S7}</h2>
              <h2>{NorthernIllinoisG1S8}</h2>
              <h2>{NorthernIllinoisG1S9}</h2>
              <h2>{NorthernIllinoisG1S10}</h2>              
          </div>
          </div>
          </div>
        )
}