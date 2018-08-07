const PubSub = require ('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  // PubSub.subscribe('Planets:all-planets-ready', (event) => {
  //   const allPlanets = event.detail;
  // });

  for(i=0; i<this.element.length; i++){
    this.element[i].addEventListener('click', (event) => {
        const selectedName = event.target.id;
        PubSub.publish('SelectView:click', selectedName);
    });
  }

  // this.element.addEventListener('click', (event) => {
  //     const selectedName = event.target.id;
  //     console.log(event.target.id);
  //     PubSub.publish('SelectView:click', selectedName);
  //});

};



module.exports = SelectView;
