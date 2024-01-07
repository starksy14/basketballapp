import Button from "./pages/Button";

const purdueSchedule = () => {
  const schedulePurdue = [
    {
      PurdueTeam1: "Texas",
      PurdueTeam2: "Rutgers",
      PurdueTeam3: "@Indiana State",
      PurdueTeam4: "UNLV",
      PurdueTeam5: "@Radford",
      PurdueTeam6: "UCLA",
      PurdueTeam7: "Penn",
      PurdueTeam8: "Delaware State",
      PurdueTeam9: "San Jose State",
      PurdueTeam10: "Marist",
      PurdueTeam11: "Washington",
      PurdueTeam12: "Northeastern",
      PurdueTeam13: "Portland State",
      PurdueTeam14: "William & Mary",
      PurdueTeam15: "VCU",
      PurdueTeam16: "Evansville",
      PurdueTeam17: "@UCLA",
      PurdueTeam18: "@Penn",
      PurdueTeam19: "@Delaware State",
      PurdueTeam20: "@San Jose State",
      PurdueTeam21: "@Marist",
      PurdueTeam22: "@Washington",
      PurdueTeam23: "@Northeastern",
      PurdueTeam24: "@Portland State",
      PurdueTeam25: "@William & Mary",
      PurdueTeam26: "@VCU",
      PurdueTeam27: "@Evansville",
    },
  ];

  const myArray1 = [
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
    "Andres",
  ]; // Your array of names
  const myArray2 = [
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
    "Trokey",
  ]; // Your array of surnames

  const purduename1 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    purduename2 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    purduename3 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    purduename4 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    purduename5 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    purduename6 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    purduename7 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    purduename8 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    purduename9 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    purduename10 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)];

  return (
    <>
      <div>
      <h1>Purdue schedule</h1>

        <div className="grid-container">
          <div className="col-sm">
            <h4>Game</h4>
            <div className="row">
              <div className="col-sm">
                <h2>Game 1</h2>
                <h2>Game 2</h2>
                <h2>Game 3</h2>
                <h2>Game 4</h2>
                <h2>Game 5</h2>
                <h2>Game 6</h2>
                <h2>Game 7</h2>
                <h2>Game 8</h2>
                <h2>Game 9</h2>
                <h2>Game 10</h2>
                <h2>Game 11</h2>
                <h2>Game 12</h2>
                <h2>Game 13</h2>
                <h2>Game 14</h2>
                <h2>Game 15</h2>
                <h2>Game 16</h2>
                <h2>Game 17</h2>
                <h2>Game 18</h2>
                <h2>Game 19</h2>
                <h2>Game 20</h2>
                <h2>Game 21</h2>
                <h2>Game 22</h2>
                <h2>Game 23</h2>
                <h2>Game 24</h2>
                <h2>Game 25</h2>
                <h2>Game 26</h2>
                <h2>Game 27</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <h4>Opponent</h4>
            <div className="col-sm">
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam1)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam2)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam3)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam4)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam5)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam6)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam7)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam8)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam9)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam10)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam11)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam12)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam13)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam14)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam15)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam16)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam17)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam18)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam19)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam20)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam21)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam22)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam23)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam24)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam25)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam26)}</h2>
              <h2>{schedulePurdue.map((schedulePurdue) => schedulePurdue.PurdueTeam27)}</h2>
            </div>
          </div>
          <div className="row">
            <h4>Result</h4>
            <div className="col-sm">
                <h2>Game 1</h2>
                <h2>Game 2</h2>
                <h2>Game 3</h2>
                <h2>Game 4</h2>
                <h2>Game 5</h2>
                <h2>Game 6</h2>
                <h2>Game 7</h2>
                <h2>Game 8</h2>
                <h2>Game 9</h2>
                <h2>Game 10</h2>
                <h2>Game 11</h2>
                <h2>Game 12</h2>
                <h2>Game 13</h2>
                <h2>Game 14</h2>
                <h2>Game 15</h2>
                <h2>Game 16</h2>
                <h2>Game 17</h2>
                <h2>Game 18</h2>
                <h2>Game 19</h2>
                <h2>Game 20</h2>
                <h2>Game 21</h2>
                <h2>Game 22</h2>
                <h2>Game 23</h2>
                <h2>Game 24</h2>
                <h2>Game 25</h2>
                <h2>Game 26</h2>
                <h2>Game 27</h2>
              </div>
          </div>
          <div className="row">
            <h4>Record</h4>
             <div className="col-sm">
                <h2>Game 1</h2>
                <h2>Game 2</h2>
                <h2>Game 3</h2>
                <h2>Game 4</h2>
                <h2>Game 5</h2>
                <h2>Game 6</h2>
                <h2>Game 7</h2>
                <h2>Game 8</h2>
                <h2>Game 9</h2>
                <h2>Game 10</h2>
                <h2>Game 11</h2>
                <h2>Game 12</h2>
                <h2>Game 13</h2>
                <h2>Game 14</h2>
                <h2>Game 15</h2>
                <h2>Game 16</h2>
                <h2>Game 17</h2>
                <h2>Game 18</h2>
                <h2>Game 19</h2>
                <h2>Game 20</h2>
                <h2>Game 21</h2>
                <h2>Game 22</h2>
                <h2>Game 23</h2>
                <h2>Game 24</h2>
                <h2>Game 25</h2>
                <h2>Game 26</h2>
                <h2>Game 27</h2>
              </div>
          </div>
          <div className="row">
            <div className="col-sm">
            <h4>Team roster</h4>
              <h2>{purduename1}</h2>
              <h2>{purduename2}</h2>
              <h2>{purduename3}</h2>
              <h2>{purduename4}</h2>
              <h2>{purduename5}</h2>
              <h2>{purduename6}</h2>
              <h2>{purduename7}</h2>
              <h2>{purduename8}</h2>
              <h2>{purduename9}</h2>
              <h2>{purduename10}</h2>
              <Button />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default purdueSchedule;
