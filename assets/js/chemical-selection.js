'use strict';

/**
 * Initialise chemical selection behaviour:
 * - Keeps autocomplete, manual input, and "not listed" checkbox in sync
 * - Clears invalid autocomplete values
 */
module.exports = function initChemicalSelection({
 notListedSelector = 'input[name="chemical-not-listed"]',
 whichChemicalInputSelector = '.autocomplete__input, input[name="which-chemical"]',
 whichChemicalSelectSelector = 'select[name="which-chemical"]',
 manualChemicalSelector = 'input[name="manually-enter-chemical"]'
} = {}) {

  // Clear which-chemical typeahead if chemical-not-listed is checked
  var notListedCheckbox = document.querySelector('input[name="chemical-not-listed"]');
  var whichChemicalInput = document.querySelector('.autocomplete__input') || document.querySelector('input[name="which-chemical"]');
  var manualChemicalInput = document.querySelector('input[name="manually-enter-chemical"]');

  if (notListedCheckbox && whichChemicalInput) {
    notListedCheckbox.addEventListener('change', function () {
      if (notListedCheckbox.checked) {
        whichChemicalInput.value = '';
        whichChemicalInput.dispatchEvent(new Event('input', { bubbles: true }));
        whichChemicalInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });

    // If user enters a value in which-chemical while chemical-not-listed is checked, clear manual and uncheck
    var handler = function () {
      if (notListedCheckbox.checked && whichChemicalInput.value) {
        notListedCheckbox.checked = false;
        notListedCheckbox.setAttribute('aria-expanded', 'false');
        if (manualChemicalInput) {
          manualChemicalInput.value = '';
          manualChemicalInput.dispatchEvent(new Event('input', { bubbles: true }));
          manualChemicalInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    };
    whichChemicalInput.addEventListener('change', handler);
    whichChemicalInput.addEventListener('input', handler);
  }
};