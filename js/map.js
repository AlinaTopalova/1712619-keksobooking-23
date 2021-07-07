import {fillTemplateCard} from './card.js';
import {DefaultCoords} from './constants.js';

const AD_COUNT = 10;

let map;
let adMarkersGroup;

const mainPin = L.marker(
  {
    lat: DefaultCoords.LAT,
    lng: DefaultCoords.LNG,
  },
  {
    draggable: true,
    icon: L.icon({
      iconUrl: 'img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    }),
  },
);

const createAdMarker = (ad) => {
  const { lat, lng } = ad.location;
  const adMarker = L.marker(
    { lat, lng },
    {
      icon: L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      }),
    },
  );

  adMarker
    .addTo(adMarkersGroup)
    .bindPopup(
      fillTemplateCard(ad),
      {
        keepInView: true,
      },
    );
};

const initMap = ({ onMapLoad, onMainPinMoveEnd }) => {
  map = L.map('map-canvas')
    .on('load', onMapLoad)
    .setView({
      lat: DefaultCoords.LAT,
      lng: DefaultCoords.LNG,
    }, 11);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPin.addTo(map);

  adMarkersGroup = L.layerGroup().addTo(map);

  mainPin.on('moveend', (evt) => {
    onMainPinMoveEnd(evt.target.getLatLng());
  });
};

const renderAdMarkers = (ads) => {
  ads.slice(0, AD_COUNT).forEach((ad) => createAdMarker(ad));
};

const resetMap = () => {
  mainPin.setLatLng({
    lat: DefaultCoords.LAT,
    lng: DefaultCoords.LNG,
  });
  map.setView({
    lat: DefaultCoords.LAT,
    lng: DefaultCoords.LNG,
  }, 11);
};

const removeAdMarkers = () => {
  adMarkersGroup.clearLayers();
};

export {initMap, resetMap, renderAdMarkers, removeAdMarkers};

