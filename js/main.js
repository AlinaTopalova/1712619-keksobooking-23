import './card.js';
import './filters.js';
import './form.js';
import './map.js';
import './popup.js';

import {form, disableAdForm, enableAdForm, resetAdForm, resetButton, setAddressInput} from './form.js';
import {getData, sendData} from './api.js';
import {createAdMarker, initMap, resetMap} from './map.js';
import {showAlert} from './utils.js';
import {disableFilters, enableFilters, filters} from './filters.js';
import { DefaultCoords } from './constants.js';
import {showSuccessPopup, showErrorPopup} from './popup.js';

const ADS_COUNT = 10;

const renderAds = (ads) => {
  ads.slice(0, ADS_COUNT).forEach((ad) => createAdMarker(ad));
};

const showMessageError = (error) => {
  showAlert(`Не удалось загрузить объявления ${error}`);
};

const resetApp = () => {
  resetMap();
  resetAdForm();
  filters.reset();
};

const deactivateApp = () => {
  disableAdForm();
  disableFilters();
};

const activateApp = () => {
  enableAdForm();
  enableFilters();
};

const setFormSubmit = (send) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    send(evt.target)
      .then(showSuccessPopup)
      .then(resetApp)
      .catch(showErrorPopup);
  });
};

const initApp = () => {
  deactivateApp();
  initMap({
    onMapLoad: activateApp,
    onMainPinMoveEnd: setAddressInput,
  });
  setAddressInput({lat: DefaultCoords.LAT, lng: DefaultCoords.LNG});
  setFormSubmit(sendData);
  getData()
    .then(renderAds)
    .catch(showMessageError);

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetApp();
  });
};

initApp();


