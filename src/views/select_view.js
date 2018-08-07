const PubSub = require ('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  // PubSub.subscribe('Planets:all-planets-ready', (event) => {
  //   const allPlanets = event.detail;
  // });

  this.element.addEventListener('click', (event) => {
      const selectedName = event.target.value;
      PubSub.publish('SelectView:click', selectedName);
  });

};



module.exports = SelectView;
