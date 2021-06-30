import './appState.js';
import './card.js';
import './filters.js';
import './form.js';
import './map.js';
import './popup.js';

import {setFormSubmit} from './form.js';
import {getData, sendData} from './api.js';
import {createAdMarker} from './map.js';
import {showAlert} from './utils.js';

const ADS_COUNT = 10;

// getData((ads) => {
//   ads.slice(0, ADS_COUNT).forEach((ad) => createAdMarker(ad));
// }, () => showAlert('Не удалось загрузить объявления'));


getData()
  .then((adsData) => {
    adsData.slice(0, ADS_COUNT).forEach((ad) => createAdMarker(ad));
  })
  .catch((error) => {
    showAlert(`Не удалось загрузить объявления (${error})`);
  });

setFormSubmit(sendData);

