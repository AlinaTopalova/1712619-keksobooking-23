const getArrayRandElement = (arr) =>
  Math.floor(Math.random() * arr.length);


const getRandomNumber = (min, max) => {
  if (max > min && min >= 0 && max > 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  throw new RangeError('Ошибочные значения диапазона: первое значение должно быть меньше второго, а также диапазон может быть только положительный, включая ноль');
};


const getArrayRandLength = (arr) =>
  arr.slice(0, getRandomNumber(1, arr.length));


const getRandomNoninteger = (min, max, decimalNumber) => {
  if (max > min && min >= 0 && max > 0) {
    return (min + Math.random() * (max - min)).toFixed(decimalNumber);
  }
  throw new RangeError('Ошибочные значения диапазона: первое значение должно быть меньше второго, а также диапазон может быть только положительный, включая ноль');
};


export{getArrayRandElement, getRandomNumber, getArrayRandLength, getRandomNoninteger};
