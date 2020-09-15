'use strict';


  window.dateNow = new Date().getTime() + 604800000;
  window.dateFull = new Date(dateNow);
  window.dateFull = dateFull.toISOString();
  window.dateShort = dateFull.match(/\d{4}-\d{2}-\d{2}/);
  window.dateEnd = dateNow + 518400000;
  window.dateEndFull = new Date(dateEnd);
  window.dateEndFull = dateEndFull.toISOString();
  window.dateEndShort = dateEndFull.match(/\d{4}-\d{2}-\d{2}/);
  document.querySelector('#start-date').value = dateShort;
  document.querySelector('#end-date').value = dateEndShort;