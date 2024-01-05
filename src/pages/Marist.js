const MaristSchedule = () => {
  const schedule = [
    {
      MaristTeam1: "Lamar",
      MaristTeam2: "Florida A&M",
      MaristTeam3: "@Arizona",
      MaristTeam4: "@Miami (Fla.)",
      MaristTeam5: "@UCF",
      MaristTeam6: "@San Jose State",
      MaristTeam7: "@VCU",
      MaristTeam8: "@Washington",
      MaristTeam9: "@William & Mary",
      MaristTeam10: "@Purdue",
      MaristTeam11: "@Penn",
      MaristTeam12: "@Portland State",
      MaristTeam13: "@UCLA",
      MaristTeam14: "@Delaware State",
      MaristTeam15: "@Evansville",
      MaristTeam16: "@Northeastern",
      MaristTeam17: "San Jose State",
      MaristTeam18: "VCU",
      MaristTeam19: "Washington",
      MaristTeam20: "William & Mary",
      MaristTeam21: "Purdue",
      MaristTeam22: "Penn",
      MaristTeam23: "Portland State",
      MaristTeam24: "UCLA",
      MaristTeam25: "Delaware State",
      MaristTeam26: "Evansville",
      MaristTeam27: "Northeastern",
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

  const Maristname1 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    Maristname2 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    Maristname3 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    Maristname4 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    Maristname5 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    Maristname6 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    Maristname7 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    Maristname8 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    Maristname9 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)],
    Maristname10 =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)];

  return (
    <>
      <div>
      <h1>Marist schedule</h1>

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
              <h2>{schedule.map((schedule) => schedule.MaristTeam1)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam2)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam3)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam4)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam5)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam6)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam7)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam8)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam9)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam10)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam11)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam12)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam13)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam14)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam15)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam16)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam17)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam18)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam19)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam20)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam21)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam22)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam23)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam24)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam25)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam26)}</h2>
              <h2>{schedule.map((schedule) => schedule.MaristTeam27)}</h2>
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
              <h2>{Maristname1}</h2>
              <h2>{Maristname2}</h2>
              <h2>{Maristname3}</h2>
              <h2>{Maristname4}</h2>
              <h2>{Maristname5}</h2>
              <h2>{Maristname6}</h2>
              <h2>{Maristname7}</h2>
              <h2>{Maristname8}</h2>
              <h2>{Maristname9}</h2>
              <h2>{Maristname10}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MaristSchedule;
