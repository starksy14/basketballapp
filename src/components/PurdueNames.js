// In a separate file or component
const generatePurdueNames = (myArray1, myArray2) => {
  const PurduePlayers = Array.from({ length: 10 }, () => {
    const randomName =
      myArray1[Math.floor(Math.random() * myArray1.length)] +
      " " +
      myArray2[Math.floor(Math.random() * myArray2.length)];
    return { name: randomName };
  });

  return PurduePlayers;
};

export { generatePurdueNames, PurduePlayers };
