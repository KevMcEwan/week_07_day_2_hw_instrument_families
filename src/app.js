const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentFamilyDetails = require('./views/instrument_family_details.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('Transform and roll out!');

  const selectElement = document.querySelector('select#instrument-families');
  const instFamDropDown = new SelectView(selectElement);
  instFamDropDown.bindEvents();

  const instDetailsDiv = document.querySelector('div#instrument-family-details');
  const displayInstFamDetails = new InstrumentFamilyDetails(instDetailsDiv);
  displayInstFamDetails.bindEvents();

  const instFamData = new InstrumentFamilies();
  instFamData.bindEvents();
});
