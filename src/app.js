const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./view/planets_info_view.js');
const SelectView = require('./view/select_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  const selectElement = document.querySelector('planet-menu-item');
  const planetSelection = new SelectView(selectElement);
  planetSelection.bindEvents();

  const infoDiv = document.querySelector('planet-details');
  const planetsInfoView = new PlanetInfoView(infoDiv);


});
