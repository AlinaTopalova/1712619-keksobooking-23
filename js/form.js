const MIN_TITLE_LENGTH = 2;
const MAX_TITLE_LENGTH = 100;

const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const formAdTitle = form.querySelector('#title');
const roomsSelect = form.querySelector('#room_number');
const guestsSelect = form.querySelector('#capacity');

const Rooms = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  HUNDREED: '100',
};

const Guests = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  ZERO: '0',
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

const validateCapacity = () => {
  const roomsNumber = roomsSelect.value;
  const guestsNumber = guestsSelect.value;
  let error = '';

  if (roomsNumber === Rooms.ONE && guestsNumber !== Guests.ONE) {
    error += 'Только для одного гостя';
  } else if (roomsNumber === Rooms.TWO && guestsNumber !== Guests.ONE && guestsNumber !== Guests.TWO) {
    error += 'Только для одного или двух гостей';
  } else if (roomsNumber === Rooms.THREE && guestsNumber === Guests.ZERO) {
    error += 'Только для одного, двух или трёх гостей';
  } else if (roomsNumber === Rooms.HUNDREED && guestsNumber !== Guests.ZERO) {
    error += 'Не для гостей';
  }
  guestsSelect.setCustomValidity(error);
  guestsSelect.reportValidity();
};

const validateTitle = () => {
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

formAdTitle.addEventListener('input', validateTitle);
form.addEventListener('change', validateCapacity);

export {disableAdForm, enableAdForm};
