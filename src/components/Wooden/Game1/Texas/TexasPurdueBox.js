import TexasBox from './TexasBox';
import PurdueBox from '../Purdue/PurdueBox';

export default function PurdueTexasBox() {
  return (

<div>
    <h1>Game 1: Texas vs. Purdue</h1>
    <div className="grid-container">
            <TexasBox />
            <PurdueBox />
            </div>
            </div>
  )
}
