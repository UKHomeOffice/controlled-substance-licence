/* eslint-disable no-var, vars-on-top */
'use strict';

require('hof/frontend/themes/gov-uk/client-js');

document.addEventListener('DOMContentLoaded', () => {
  const loaderContainer = document.querySelector('#loader-container');
  const reportSubmitButton = document.querySelector('#report-submit');
  if (loaderContainer) {
    document.querySelector('#report-submit .govuk-button').addEventListener('click', () => {
      loaderContainer.classList.add('spinner-loader');
      reportSubmitButton.classList.add('visuallyhidden');
    });
  }
});
