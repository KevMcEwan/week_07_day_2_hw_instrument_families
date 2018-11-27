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
  const infoHeader = document.createElement('h1');
  const infoParagraph = document.createElement('p');
  const infoList = document.createElement('p');

  const instruments = instrumentFamily.instruments



  infoHeader.textContent = `${instrumentFamily.name}`;
  infoParagraph.textContent = `${instrumentFamily.description}.`;

  instruments.forEach((instrument)=>{console.log(instrument)});

  // this.container.innerHTML = '';
  this.container.appendChild(infoHeader);
  this.container.appendChild(infoParagraph);



};












module.exports = InstrumentFamilyDetails;
