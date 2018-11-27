const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyDetails = function (container) {
  this.container = container;
}

InstrumentFamilyDetails.prototype.bindEvents = function () {
  PubSub.subscribe('InstFam:display-chosen-family', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  };
};

InstrumentFamilyDetails.prototype.render = function (instrumentFamily) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = "testingtesting123";
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentFamilyDetails;
