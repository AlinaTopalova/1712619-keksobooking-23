import{getArrayRandElement, getRandomNumber, getArrayRandLength, getRandomNoninteger} from './utils.js';

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
  'Просторное жильё в самом центре города',
];
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_LIST = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TYPE_LIST = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TITLE_LIST = ['Номер люкс по самой лучшей цене', 'Домик в лесу в аренду', 'Сдам просторные новые аппартаменты', 'Уютная квартира в центре города'];


const createAds = (adNumber) => {
  const result = [];

  for (let i = 1; i <= adNumber; i += 1) {

    const locationX = Number(getRandomNoninteger(LAT_MIN, LAT_MAX, LOCATION_DIGITS_AMOUNT));
    const locationY = Number(getRandomNoninteger(LNG_MIN, LNG_MAX, LOCATION_DIGITS_AMOUNT));

    result.push({
      'author': {
        'avatar': `img/avatars/user0${i}.png`,
      },
      'offer': {
        'title': getArrayRandElement(TITLE_LIST),
        'address': `${locationX}, ${locationY}`,
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
        'lat': locationX,
        'lng': locationY,
      },
    });
  }
  return result;
};

/*createAds(AD_COUNT);*/

export{createAds};
