import SFAustinBox from './SFAustinBox';
import WashingtonBox from '../Washington/WashingtonBox';

export default function SFAustinWashBox () {
  return (

<div>
    <h1>Game 1: Stephen F. Austin vs. Washington</h1>
    <div className="grid-container">
            <SFAustinBox />
            <WashingtonBox />
            </div>
            </div>
  )
}