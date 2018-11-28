const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyDetails = function (container) {
  this.container = container;
}

InstrumentFamilyDetails.prototype.bindEvents = function () {
  PubSub.subscribe('InstFam:display-chosen-family', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

InstrumentFamilyDetails.prototype.render = function (instrumentFamily) {
  this.container.innerHTML = '';

  const infoHeader = document.createElement('h1');
  infoHeader.textContent = `${instrumentFamily.name}`;
  this.container.appendChild(infoHeader);

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${instrumentFamily.description}.`;
  this.container.appendChild(infoParagraph);

  const instruments = instrumentFamily.instruments;
  const instrumentList = this.createInstrumentList(instruments);
  this.container.appendChild(instrumentList);
};

InstrumentFamilyDetails.prototype.createInstrumentList = function (instruments) {

  const infoList = document.createElement('ul');

  instruments.forEach( (instrument) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${instrument}`;
    infoList.appendChild(listItem);
  });
  return infoList;
};












module.exports = InstrumentFamilyDetails;
