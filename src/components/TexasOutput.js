import React, { useEffect, useState } from 'react';
import generateTexasNames from './TexasNames';

const YourComponent = () => {
  const [TexasPlayers, setTexasPlayers] = useState([]);

  useEffect(() => {
    // Replace these sample arrays with your actual data
    const myArray1 = ['John', 'Jane', 'Mike'];
    const myArray2 = ['Doe', 'Smith', 'Johnson'];

    // Generate Texas player names when the component mounts
    const generatedNames = generateTexasNames(myArray1, myArray2);
    setTexasPlayers(generatedNames);
  }, []);

  // Render your component with TexasPlayers state
  return (
    <div>
      {TexasPlayers.map((player, index) => (
        <div key={index}>{player.name}</div>
      ))}
    </div>
  );
};

export default YourComponent;