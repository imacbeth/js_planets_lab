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

this.container.innerHTML = '';

  Object.entries(planet).forEach(([key, value]) => {
    if(key=='image'){
      let imageToDisplay = document.createElement('img');
      imageToDisplay.src = value;
       this.container.appendChild(imageToDisplay);
    }else{
    let planetToDisplay = document.createElement('p');
    planetToDisplay.textContent = `${key} : ${value}`;
     this.container.appendChild(planetToDisplay);
  }



  })

};

module.exports = PlanetInfoView;
