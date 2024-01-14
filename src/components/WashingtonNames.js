import React, { useEffect, useState } from 'react';

const WashingtonComponent = ({ generateWashingtonNames }) => {
  const [Washingtonplayers, setWashingtonPlayers] = useState([]);

  useEffect(() => {
    // Check if there are previously saved player names in local storage
    const storedWashingtonPlayers = JSON.parse(localStorage.getItem('WashingtonplayerNames'));

    if (storedWashingtonPlayers) {
      setWashingtonPlayers(storedWashingtonPlayers);
    } else {
      // Replace these sample arrays with your actual data
      const WashingtonArray1 = [
        "Collin",
        "Sean",
        "Leopoldo",
        "Danny",
        "Jesus",
        "Keneth",
        "Elden",
        "Randolph",
        "Jarrett",
        "Elton",
        "Fredrick",
        "Earle",
        "Lonny",
        "Al",
        "Sol",
        "Arnold",
        "Taylor",
        "Dwain",
        "Lauren",
        "Scotty",
        "Wes",
        "Harlan",
        "Theodore",
        "Marvin",
        "Harland",
        "Randell",
        "Sergio",
        "Jamel",
        "Jesus",
        "Harrison",
        "Cole",
        "Thaddeus",
        "Rickie",
        "Teddy",
        "Linwood",
        "Clemente",
        "Fabian",
        "Houston",
        "Hugh",
        "Mitch",
        "Leopoldo",
        "Bernard",
        "Reyes",
        "Felix",
        "Roland",
        "John",
        "Denis",
        "Galen",
        "Douglas",
        "Max",
        "Hilton",
        "Vicente",
        "Williams",
        "Dylan",
        "Gary",
        "Wendell",
        "Mason",
        "Brady",
        "Tommie",
        "Kristofer",
        "Gilbert",
        "Erick",
        "Edmundo",
        "Bryon",
        "Ronnie",
        "Nicolas",
        "Kerry",
        "Justin",
        "Dean",
        "Keenan",
        "Robbie",
        "Rocco",
        "Dustin",
        "Jim",
        "Alonzo",
        "Mauro",
        "Leandro",
        "Stephan",
        "Valentine",
        "Drew",
        "Huey",
        "Jeffery",
        "Jared",
        "Oliver",
        "Stanton",
        "Preston",
        "Rubin",
        "Eddie",
        "Arturo",
        "Orville",
        "Sol",
        "Mohammed",
        "Abe",
        "Willis",
        "Enoch",
        "Jerry",
        "Thomas",
        "Waylon",
        "Margarito",
        "Ernie",
        "Felipe",
        "Tracey",
        "Porter",
        "Floyd",
        "Gil",
        "Willy",
        "Horace",
        "Lino",
        "Renaldo",
        "Jules",
        "Ronald",
        "Pat",
        "Laverne",
        "Pete",
        "Myles",
        "Seth",
        "Ollie",
        "Josh",
        "Rodolfo",
        "Carmelo",
        "Rich",
        "Graig",
        "Colby",
        "Cedric",
        "Humberto",
        "Malcolm",
        "Ron",
        "Vance",
        "Olin",
        "Andrea",
        "Lane",
        "Nigel",
        "Brant",
        "Troy",
        "Cole",
        "Vito",
        "Dewitt",
        "Loren",
        "Clifford",
        "Harvey",
        "Frances",
        "Isidro",
        "Alex",
        "Fernando",
        "Isiah",
        "Modesto",
        "Rolf",
        "Ward",
        "Wilfred",
        "Buford",
        "Salvador",
        "Robert",
        "Lorenzo",
        "Jody",
        "Orlando",
        "Percy",
        "Clement",
        "Ellis",
        "Garry",
        "Rolf",
        "Jesus",
        "Ward",
        "Wilbur",
        "Wayne",
        "David",
        "Wilford",
        "Milton",
        "Burt",
        "Neil",
        "Ernie",
        "Enoch",
        "Arden",
        "Woodrow",
        "Milton",
        "Norman",
        "Micheal",
        "Glenn",
        "Carlo",
        "Gino",
        "Lorenzo",
        "Jae",
        "Peter",
        "Darell",
        "Isidro",
        "Rudolf",
        "Dorian",
        "Jamaal",
        "Chong",
        "Demetrius",
        "Fernando",
        "Ollie",
        "Efrain",
        "Enoch",
        "Issac",
        "Conrad",
        "Arlen",
        "Ryan",
        "Jewel",
        "Jonas",
        "Andres"
      ]; // Your array of names
      const WashingtonArray2 = [
        "Goodyear",
        "Arndorfer",
        "Stire",
        "Flud",
        "Provorse",
        "Prefontaine",
        "MacHamer",
        "Birenbaum",
        "Silberstein",
        "Vigen",
        "Deoliveira",
        "Foiler",
        "Birton",
        "Kallevig",
        "Sonders",
        "Lostracco",
        "Kinyon",
        "Bestine",
        "Fierman",
        "Kaps",
        "Samuelsen",
        "Hafferkamp",
        "Moro",
        "McKoan",
        "Rients",
        "Gironda",
        "Poudrier",
        "Claridge",
        "Lickteig",
        "Zedaker",
        "Cuffie",
        "Polintan",
        "Kurban",
        "Paguirgan",
        "Stark",
        "Shukla",
        "Minniear",
        "Rupley",
        "Alderdge",
        "Tease",
        "Kouyate",
        "Shetley",
        "Soler",
        "Coppinger",
        "Cliffe",
        "Marinacci",
        "Steinmann",
        "Homestead",
        "Edgemon",
        "Tenbusch",
        "Trofholz",
        "Woollen",
        "Belliveau",
        "Grove",
        "Tomlison",
        "Villarta",
        "Dinkins",
        "Villaneda",
        "Hanneman",
        "Frazeur",
        "Holmstrom",
        "Giles",
        "Tokunaga",
        "Malsom",
        "Savidge",
        "Warp",
        "Roaden",
        "Grabill",
        "Brogden",
        "Lakin",
        "Meager",
        "Parsell",
        "Loesch",
        "Matsubara",
        "Jellison",
        "Renfroe",
        "Rattu",
        "Pouliotte",
        "Zart",
        "Yanchik",
        "Cobo",
        "Jeffries",
        "Chiapetta",
        "Merril",
        "Skyers",
        "Hunsucker",
        "Arturo",
        "Lovering",
        "Tallant",
        "Kotter",
        "Coniglio",
        "Kocab",
        "Mossey",
        "Hamel",
        "Lonie",
        "Pante",
        "Holecz",
        "Bailon",
        "Broschinsky",
        "Arebela",
        "Muckenthaler",
        "Planty",
        "Sickels",
        "Lean",
        "Ranft",
        "Lavis",
        "Ellicott",
        "Riviezzo",
        "Pharmes",
        "Motyka",
        "Vartanyan",
        "Katan",
        "Waiters",
        "MacEwen",
        "Laneve",
        "Montondo",
        "Hogatt",
        "Hanscom",
        "Fortman",
        "Kregger",
        "Gelder",
        "McCleery",
        "Orio",
        "Huski",
        "Creasman",
        "Graus",
        "Chaisty",
        "Davolt",
        "Jepko",
        "Osterhoudt",
        "Casseday",
        "Cessna",
        "Dowdell",
        "Theresa",
        "Fabbri",
        "Preas",
        "Landmark",
        "Dailey",
        "Dobrushin",
        "Amer",
        "Sorgente",
        "Byczek",
        "Mon",
        "Kozma",
        "Gauch",
        "Ladson",
        "Hierro",
        "Tai",
        "Marcinko",
        "Buhovecky",
        "Zellefrow",
        "Trokey"
      ]; // Your array of surnames

      // Generate player names when the component mounts
      const generatedWashingtonNames = generateWashingtonNames(WashingtonArray1, WashingtonArray2);
      setWashingtonPlayers(generatedWashingtonNames);

      // Save the generated names to local storage
      localStorage.setItem('WashingtonplayerNames', JSON.stringify(generatedWashingtonNames));
    }
  }, [generateWashingtonNames]);

  return (
    <div>
      {Washingtonplayers.map((player, index) => (
        <div key={index}>
          {player.name}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

const generateWashingtonNames = (WashingtonArray1, WashingtonArray2) => {
  const players = Array.from({ length: 10 }, () => {
    const playerName =
      WashingtonArray1[Math.floor(Math.random() * WashingtonArray1.length)] +
      ' ' +
      WashingtonArray2[Math.floor(Math.random() * WashingtonArray2.length)];
    return { name: playerName };
  });

  return players;
};

export { WashingtonComponent, generateWashingtonNames };
