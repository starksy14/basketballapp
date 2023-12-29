const purdueSchedule = () => {
  const schedule = [
    {
      Team1: "Texas",
      Team2: "Rutgers",
      Team3: "@Indiana State",
      Team4: "UNLV",
      Team5: "@Radford",
      Team6: "@UCLA",
      Team7: "@Washington",
      Team8: "VCU",
      Team9: "@San Jose State",
      Team10: "Portland State",
      Team11: "@Penn",
      Team12: "@Northeastern",
      Team13: "Evansville",
      Team14: "Marist",
      Team15: "@William & Mary",
      Team16: "@Delaware State",
      Team17: "UCLA",
      Team18: "Washington",
      Team19: "@VCU",
      Team20: "San Jose State",
      Team21: "@Portland State",
      Team22: "Penn",
      Team23: "Northeastern",
      Team24: "@Evansville",
      Team25: "@Marist",
      Team26: "William & Mary",
      Team27: "Delaware State",
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
              <h2>{schedule.map((schedule) => schedule.Team1)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team2)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team3)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team4)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team5)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team6)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team7)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team8)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team9)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team10)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team11)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team12)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team13)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team14)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team15)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team16)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team17)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team18)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team19)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team20)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team21)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team22)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team23)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team24)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team25)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team26)}</h2>
              <h2>{schedule.map((schedule) => schedule.Team27)}</h2>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default purdueSchedule;
