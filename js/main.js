const AD_COUNT = 8;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const LOCATION_DIGITS_AMOUNT = 5;
const PRICE_MIN = 1000;
const PRICE_MAX = 5000;
const ROOMS_MIN = 1;
const ROOMS_MAX = 5;
const GUESTS_MIN = 1;
const GUESTS_MAX = 10;
const CHECKIN_LIST = ['12:00', '13:00', '14:00'];
const CHECKOUT_LIST = ['12:00', '13:00', '14:00'];
const DESCRIPTION_LIST = [
  'Удобное расположение',
  'Идеально для отдыха вдвоём',
  'Самый современный номер',
  'Просторное жильё в самом центре города'];
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_LIST = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const TYPE_LIST = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TITLE_LIST = ['Номер люкс по самой лучшей цене', 'Домик в лесу в аренду', 'Сдам просторные новые аппартаменты', 'Уютная квартира в центре города'];


const getArrayRandElement = function (arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const getRandomNumber = function (min, max) {
  if (max > min && min >= 0 && max > 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  throw new RangeError('Ошибочные значения диапазона: первое значение должно быть меньше второго, а также диапазон может быть только положительный, включая ноль');
};

const getArrayRandLength = function (arr) {
  const result = [];
  const arrMiddle = Math.floor(arr.length / 2);
  for (let index = getRandomNumber(0, arrMiddle); index < getRandomNumber(arrMiddle + 1, arr.length); index += 1) {
    result.push(arr[index]);
  }
  return result;
};

const getRandomNoninteger = function (min, max, decimalNumber) {
  if (max > min && min >= 0 && max > 0) {
    return (min + Math.random() * (max - min)).toFixed(decimalNumber);
  }
  throw new RangeError('Ошибочные значения диапазона: первое значение должно быть меньше второго, а также диапазон может быть только положительный, включая ноль');
};


const createAd = (adNumber) => {
  const result = [];
  for (let index = 1; index <= adNumber; index += 1) {
    result.push({
      'author': {
        'avatar': `img/avatars/user0${index}.png`,
      },
      'offer': {
        'title': getArrayRandElement(TITLE_LIST),
        'address': `${getRandomNoninteger(LAT_MIN, LAT_MAX, LOCATION_DIGITS_AMOUNT)}, ${getRandomNoninteger(LNG_MIN, LNG_MAX, LOCATION_DIGITS_AMOUNT)}`,
        'price': getRandomNumber(PRICE_MIN, PRICE_MAX),
        'type': getArrayRandElement(TYPE_LIST),
        'rooms': getRandomNumber(ROOMS_MIN, ROOMS_MAX),
        'guests': getRandomNumber(GUESTS_MIN, GUESTS_MAX),
        'checkin': getArrayRandElement(CHECKIN_LIST),
        'checkout': getArrayRandElement(CHECKOUT_LIST),
        'features': getArrayRandLength(FEATURES_LIST),
        'description': getArrayRandElement(DESCRIPTION_LIST),
        'photos': getArrayRandLength(PHOTOS_LIST),
      },
      'location': {
        'lat': Number(getRandomNoninteger(LAT_MIN, LAT_MAX, LOCATION_DIGITS_AMOUNT)),
        'lng': Number(getRandomNoninteger(LNG_MIN, LNG_MAX, LOCATION_DIGITS_AMOUNT)),
      },
    });
  }
  return result;
};


createAd(AD_COUNT);
