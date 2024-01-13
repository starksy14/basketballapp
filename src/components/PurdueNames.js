import React, { useEffect, useState } from 'react';

const YourComponent = ({ generatePlayerNames }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Check if there are previously saved player names in local storage
    const storedPlayers = JSON.parse(localStorage.getItem('playerNames'));

    if (storedPlayers) {
      setPlayers(storedPlayers);
    } else {
      // Replace these sample arrays with your actual data
      const myArray1 = ['John', 'Jane', 'Mike'];
      const myArray2 = ['Doe', 'Smith', 'Johnson'];

      // Generate player names when the component mounts
      const generatedNames = generatePlayerNames(myArray1, myArray2);
      setPlayers(generatedNames);

      // Save the generated names to local storage
      localStorage.setItem('playerNames', JSON.stringify(generatedNames));
    }
  }, [generatePlayerNames]);

  return (
    <div>
      {players.map((player, index) => (
        <div key={index}>
          {player.name}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

const generatePlayerNames = (myArray1, myArray2) => {
  const players = Array.from({ length: 10 }, () => {
    const playerName =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      ' ' +
      myArray2[Math.floor(Math.random() * myArray2.length)];
    return { name: playerName };
  });

  return players;
};

export { YourComponent, generatePlayerNames };
