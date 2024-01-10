const generateTexasNames = (myArray1, myArray2) => {
  const TexasPlayers = Array.from({ length: 10 }, () => {
    const randomName =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)];
    return { name: randomName };
  });

  return TexasPlayers;
};

export default generateTexasNames;