const PubSub = require ('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};


SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('Planets:all-planets-ready', this.planets);

  PubSub.subscribe('SelectView:click', (event) => {
    const selectedName = event.detail;
    this.publishPlanetDetail(selectedName)
  });

};

SolarSystem.prototype.publishPlanetDetail = function (planetName) {
for (var i = 0; i < this.planets.length; i++) {
  if (this.planets[i].name === planetName){
  PubSub.publish('Planets:selected-planet-ready', this.planets[i]);}
}
//const selectedPlanet = this.planets["planetName"];

//PubSub.publish('Planets:selected-planet-ready', selectedPlanet);
};




module.exports = SolarSystem;
