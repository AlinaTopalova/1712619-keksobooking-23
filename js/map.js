import {activateApp} from './appState.js';
import {setAddressInput, resetButton} from './form.js';
import {fillTemplateCard} from './card.js';

const LOCATION_DIGITS_AMOUNT = 5;

const defaultCoords = {
  LAT: 35.65160,
  LNG: 139.74908,
};

const map = L.map('map-canvas')
  .on('load', () => activateApp())
  .setView({
    lat: defaultCoords.LAT,
    lng: defaultCoords.LNG,
  }, 11);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const defaultMainPin = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPin = L.marker(
  {
    lat: defaultCoords.LAT,
    lng: defaultCoords.LNG,
  },
  {
    draggable: true,
    icon: defaultMainPin,
  },
);

mainPin.addTo(map);

const getMainPinCoords = () => {
  setAddressInput(`${defaultCoords.LAT}, ${defaultCoords.LNG}`);

  mainPin.on('moveend', (evt) => {
    const newCoordLat = (evt.target.getLatLng().lat).toFixed(LOCATION_DIGITS_AMOUNT);
    const newCoordLng = (evt.target.getLatLng().lng).toFixed(LOCATION_DIGITS_AMOUNT);
    setAddressInput(`${newCoordLat}, ${newCoordLng}`);
  });
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  mainPin.setLatLng({
    lat: defaultCoords.LAT,
    lng: defaultCoords.LNG,
  });
  map.setView({
    lat: defaultCoords.LAT,
    lng: defaultCoords.LNG,
  }, 11);
  setAddressInput(`${defaultCoords.LAT}, ${defaultCoords.LNG}`);
});

const addMarkersGroup = L.layerGroup().addTo(map);
const adMarkerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createAdMarker = (ad) => {
  const {lat, lng} = ad.location;
  const adMarker = L.marker(
    {
      lat,
      lng,
    },
    {
      adMarkerIcon,
    },
  );
  adMarker
    .addTo(addMarkersGroup)
    .bindPopup(
      fillTemplateCard(ad),
      {
        keepInView: true,
      },
    );
};

getMainPinCoords();

export {createAdMarker};

