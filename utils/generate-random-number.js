const generateNumberBetween = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export default generateNumberBetween;
