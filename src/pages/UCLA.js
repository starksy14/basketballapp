const UCLASchedule = () => {
    const schedule = [
      {
        Team1: "@South Carolina",
        Team2: "UAB",
        Team3: "George Mason",
        Team4: "@Fresno State",
        Team5: "@Oral Roberts",
        Team6: "Purdue",
        Team7: "VCU",
        Team8: "@San Jose State",
        Team9: "@Portland State",
        Team10: "Penn",
        Team11: "Northeastern",
        Team12: "@Evansville",
        Team13: "@Marist",
        Team14: "William & Mary",
        Team15: "Delaware State",
        Team16: "@Washington",
        Team17: "@Purdue",
        Team18: "@VCU",
        Team19: "San Jose State",
        Team20: "Portland State",
        Team21: "@Penn",
        Team22: "@Northeastern",
        Team23: "Evansville",
        Team24: "Marist",
        Team25: "@William & Mary",
        Team26: "@Delaware State",
        Team27: "Washington",
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
  
    const UCLAname1 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      UCLAname2 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      UCLAname3 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      UCLAname4 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      UCLAname5 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      UCLAname6 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      UCLAname7 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      UCLAname8 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      UCLAname9 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      UCLAname10 =
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
                <h2>{UCLAname1}</h2>
                <h2>{UCLAname2}</h2>
                <h2>{UCLAname3}</h2>
                <h2>{UCLAname4}</h2>
                <h2>{UCLAname5}</h2>
                <h2>{UCLAname6}</h2>
                <h2>{UCLAname7}</h2>
                <h2>{UCLAname8}</h2>
                <h2>{UCLAname9}</h2>
                <h2>{UCLAname10}</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default UCLASchedule;
  