const SolarSystem = function(planets) {
  this.planets = planets;
};


Planets.prototype.bindEvents = function () {
  PubSub.publish('Planets:all-planets-ready', this.planets);

  PubSub.subscribe('SelectView:click', (event) => {
    const selectedIndex = event.detail;
    this.publishPlanetDetail(selectedIndex)
  });

};

Planets.prototype.publishPlanetDetail = function (planetIndex) {
const selecetedPlanet = this.planets[planetIndex];
PubSub.publish('Planets:selected-planet-ready', selecetedPlanet);  
};




module.exports = SolarSystem;
