const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const formAdTitle = form.querySelector('#title');
const roomsSelect = form.querySelector('#room_number');
const guestsSelect = form.querySelector('#capacity');
const optionCapacityGuests = guestsSelect.querySelectorAll('option');
const price = form.querySelector('#price');
const typeOfHouseSelect = form.querySelector('#type');
const timeInSelect = form.querySelector('#timein');
const timeOutSelect = form.querySelector('#timeout');

const RoomsValue = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const MinPriceForNight = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const disableAdForm = () => {
  form.classList.add('ad-form--disabled');

  formFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const enableAdForm = () => {
  form.classList.remove('ad-form--disabled');
  formFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

const onTitleInput = () => {
  const valueLength = formAdTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    formAdTitle.setCustomValidity(`Еще ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formAdTitle.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    formAdTitle.setCustomValidity('');
  }
  formAdTitle.reportValidity();
};

const onTimeChange = (timeValue) => {
  timeInSelect.value = timeValue.target.value;
  timeOutSelect.value = timeValue.target.value;
};

const onTypeOfHouseChange = () => {
  const typeOfHouse = typeOfHouseSelect.value;
  price.setAttribute('min', MinPriceForNight[typeOfHouse]);
  price.placeholder = MinPriceForNight[typeOfHouse];
};

const onRoomChange = (evt) => {
  optionCapacityGuests.forEach((option) => {
    option.disabled = true;
  });

  RoomsValue[evt.target.value].forEach((seatsAmount) => {
    optionCapacityGuests.forEach((option) => {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
};

formAdTitle.addEventListener('input', onTitleInput);
typeOfHouseSelect.addEventListener('change', onTypeOfHouseChange);
roomsSelect.addEventListener('change', onRoomChange);
timeInSelect.addEventListener('change', onTimeChange);
timeOutSelect.addEventListener('change', onTimeChange);


export {disableAdForm, enableAdForm};
