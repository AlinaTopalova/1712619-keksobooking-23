import {disableFilters, enableFilters} from './filters.js';
import {disableAdForm, enableAdForm} from './form.js';

const deactivateApp = () => {
  disableAdForm();
  disableFilters();
};

const activateApp = () => {
  enableAdForm();
  enableFilters();
};

deactivateApp();

export {activateApp};
