const PubSub = require ('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};



SelectView.prototype.populate = function (planetsData) {

  planetsData.forEach((planet, index) => {
    const option = document.createElement('option');
    option.textContent = planet.name;
    option.value = index;
    this.element.appendChild(option);
  })

};


module.exports = SelectView;
