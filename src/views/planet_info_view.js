const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function (container) {
  this.container = container;
};


PlanetInfoView.prototype.bindEvents = function () {

  PubSub.subscribe('Planets:selected-planet-ready', (event) => {
    const planet = event.detail;
    this.display(planet);
  });

};

PlanetInfoView.prototype.display = function (planet) {
  const planetInfo = document.createElement('p');

  Object.entries(planet).forEach(([key, value]) => {

    planetInfo.textContent = `${key} : ${value}`;

  })

};

module.exports = PlanetInfoView;
