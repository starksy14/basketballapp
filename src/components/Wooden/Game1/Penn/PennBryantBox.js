import PennBox from '../Penn/PennBox';
import BryantBox from '../Bryant/BryantBox';

export default function PennBryantBox() {
  return (

<div>
    <h1>Game 1: Penn vs. Bryant</h1>
    <div className="grid-container">
            <PennBox />
            <BryantBox />
            </div>
            </div>
  )
}