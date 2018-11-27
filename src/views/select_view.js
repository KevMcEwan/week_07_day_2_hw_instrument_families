const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:show-all-families', (event) => {
    const allInstrumentFamilies = event.detail;
    this.populate(allInstrumentFamilies);
  } );

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  } );
};

SelectView.prototype.populate = function (arrayOfInstFams) {
  arrayOfInstFams.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
