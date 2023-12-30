const WashingtonSchedule = () => {
  const schedule = [
    {
      Team1: "Stephen F. Austin",
      Team2: "@Loyola Marymount",
      Team3: "George Washington",
      Team4: "@Cal Baptist",
      Team5: "High Point",
      Team6: "",
      Team7: "",
      Team8: "",
      Team9: "",
      Team10: "",
      Team11: "",
      Team12: "",
      Team13: "",
      Team14: "",
      Team15: "",
      Team16: "",
      Team17: "",
      Team18: "",
      Team19: "",
      Team20: "",
      Team21: "",
      Team22: "",
      Team23: "",
      Team24: "",
      Team25: "",
      Team26: "",
      Team27: "",
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

  const washname1 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    washname2 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    washname3 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    washname4 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    washname5 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    washname6 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    washname7 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    washname8 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    washname9 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    washname10 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)];

  return (
    <>
      <div>
      <h1>Washington schedule</h1>

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
              <h2>{washname1}</h2>
              <h2>{washname2}</h2>
              <h2>{washname3}</h2>
              <h2>{washname4}</h2>
              <h2>{washname5}</h2>
              <h2>{washname6}</h2>
              <h2>{washname7}</h2>
              <h2>{washname8}</h2>
              <h2>{washname9}</h2>
              <h2>{washname10}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WashingtonSchedule;
