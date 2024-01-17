import TexasBox from './TexasBox';
import PurdueBox from './PurdueBox';

export default function PurdueTexasBox() {
  return (
<div>
    <center><h1>Game 1: Texas vs. Purdue</h1></center>
    <div className="grid-container">
            <center><TexasBox /></center>
    <div className="col-sm">
            <div className="row">
            </div>
            </div>
    <center><PurdueBox /></center>
            </div>
</div>
  )
}
