const VCUSchedule = () => {
    const scheduleVCU = [
      {
        VCUTeam1: "Hawaii",
        VCUTeam2: "@Saint Louis",
        VCUTeam3: "@Utah Valley",
        VCUTeam4: "Eastern Kentucky",
        VCUTeam5: "Northern Arizona",
        VCUTeam6: "@William & Mary",
        VCUTeam7: "@Marist",
        VCUTeam8: "@Evansville",
        VCUTeam9: "@Portland State",
        VCUTeam10: "@San Jose State",
        VCUTeam11: "@UCLA",
        VCUTeam12: "@Delaware State",
        VCUTeam13: "@Northeastern",
        VCUTeam14: "@Penn",
        VCUTeam15: "@Purdue",
        VCUTeam16: "@Washington",
        VCUTeam17: "William & Mary",
        VCUTeam18: "Marist",
        VCUTeam19: "Evansville",
        VCUTeam20: "Portland State",
        VCUTeam21: "San Jose State",
        VCUTeam22: "UCLA",
        VCUTeam23: "Delaware State",
        VCUTeam24: "Northeastern",
        VCUTeam25: "Penn",
        VCUTeam26: "Purdue",
        VCUTeam27: "Washington",
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
  
    const VCUname1 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      VCUname2 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      VCUname3 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      VCUname4 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      VCUname5 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      VCUname6 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      VCUname7 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      VCUname8 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      VCUname9 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)],
      VCUname10 =
        myArray1[Math.floor(Math.random() * myArray1.length)] +
        " " +
        myArray2[Math.floor(Math.random() * myArray2.length)];
  
    return (
      <>
        <div>
        <h1>VCU schedule</h1>
  
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
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam1)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam2)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam3)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam4)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam5)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam6)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam7)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam8)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam9)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam10)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam11)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam12)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam13)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam14)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam15)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam16)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam17)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam18)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam19)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam20)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam21)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam22)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam23)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam24)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam25)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam26)}</h2>
                <h2>{scheduleVCU.map((scheduleVCU) => scheduleVCU.VCUTeam27)}</h2>
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
              <h4>VCUTeam roster</h4>
                <h2>{VCUname1}</h2>
                <h2>{VCUname2}</h2>
                <h2>{VCUname3}</h2>
                <h2>{VCUname4}</h2>
                <h2>{VCUname5}</h2>
                <h2>{VCUname6}</h2>
                <h2>{VCUname7}</h2>
                <h2>{VCUname8}</h2>
                <h2>{VCUname9}</h2>
                <h2>{VCUname10}</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default VCUSchedule;
  