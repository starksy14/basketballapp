import TexasBox from './TexasBox';
import PurdueBox from './PurdueBox';

export default function PurdueTexasBox() {
  return (
    <div>
    <center><h1>Game 1: Texas vs. Purdue</h1></center>
    <div className="grid-container">
    <TexasBox />
  <div className="row">
                <div className="col-sm">
<PurdueBox />            
</div>
</div>
</div>
</div>
            
  )
}
