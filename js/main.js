const getRandomNumber = function (min, max) {
  if (max > min && min >= 0 && max > 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  throw new RangeError('Ошибочные значения диапазона: первое значение должно быть меньше второго, а также диапазон может быть только положительный, включая ноль');
};


const getRandomNoninteger = function (min, max, decimalNumber) {
  if (max > min && min >= 0 && max > 0) {
    return (min + Math.random() * (max - min)).toFixed(decimalNumber);
  }
  throw new RangeError('Ошибочные значения диапазона: первое значение должно быть меньше второго, а также диапазон может быть только положительный, включая ноль');
};


getRandomNumber(10, 1);
getRandomNoninteger(5, 10, 9);

