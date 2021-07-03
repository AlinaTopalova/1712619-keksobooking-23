const ANY_SELECT = 'any';

const filters = document.querySelector('.map__filters');
const filterSelects = filters.querySelectorAll('select');
const filterFeatures = filters.querySelector('.map__features');
const housingType = filters.querySelector('#housing-type');
//const housingPrice = filters.querySelector('#housing-price');
//const housingRooms = filters.querySelector('#housing-rooms');
//const housingGuests = filters.querySelector('#housing-guests');
//const housingFeatures = filters.querySelector('#housing-features');
//const checkboxFeatures = housingFeatures.querySelector('.map__feature');


const disableFilters = () => {
  filters.classList.add('map__filters--disabled');
  filterSelects.forEach((select) => {
    select.disabled = true;
  });
  filterFeatures.disabled = true;
};

const enableFilters = () => {
  filters.classList.remove('map__filters--disabled');
  filterSelects.forEach((select) => {
    select.disabled = false;
  });
  filterFeatures.disabled = false;
};

const filterHousingType = (ad) => {
  const filterValue = housingType.value;
  if (filterValue === ANY_SELECT) {
    return true;
  }
  return ad.offer.type === filterValue;
};


export {
  disableFilters,
  enableFilters,
  filterHousingType,
  housingType,
  filters
};

