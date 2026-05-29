'use strict';

/**
 * Initialise chemical selection behaviour:
 * - Keeps autocomplete, manual input, and "not listed" checkbox in sync
 * - Clears invalid autocomplete values
 */
module.exports = function initChemicalSelection() {
  const notListedCheckbox = document.querySelector('input[name="chemical-not-listed"]');
  const typeaheadInput = document.querySelector('.autocomplete__input');
  const whichChemicalInput = document.querySelector('select[id="which-chemical-select"]');

  const manualChemicalInput = document.querySelector('input[name="manually-enter-chemical"]');
  const manualChemicalContainer = manualChemicalInput?.closest('.govuk-form-group');

  const normalise = value => (value || '').trim().toLowerCase();

  const clearInput = input => {
    if (!input || !input.value) {
      return;
    }

    input.value = '';
    input.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const clearTypeahead = () => {
    if (!typeaheadInput || !typeaheadInput.value) {
      return;
    }

    // Keep the visible autocomplete input in sync when toggling "not listed".
    typeaheadInput.value = '';
    typeaheadInput.dispatchEvent(new Event('input', { bubbles: true }));
    typeaheadInput.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const syncTypedValueToSelection = () => {
    if (!typeaheadInput || !whichChemicalInput) {
      return;
    }

    const typedValue = normalise(typeaheadInput.value);

    if (!typedValue) {
      // User cleared text manually, so clear the stored field value as well.
      clearInput(whichChemicalInput);
      return;
    }

    if (!whichChemicalInput.value) {
      return;
    }

    let selectedValue = normalise(whichChemicalInput.value);
    let selectedLabel = '';

    if (whichChemicalInput.tagName === 'SELECT') {
      // Compare typed text against both stored value and option label.
      const selectedOption = whichChemicalInput.options[whichChemicalInput.selectedIndex];
      selectedValue = normalise(selectedOption?.value);
      selectedLabel = normalise(selectedOption?.textContent);
    }

    if (typedValue !== selectedValue && typedValue !== selectedLabel) {
      clearInput(whichChemicalInput);
    }
  };

  /**
   * Scenario 1:
   * Checkbox checked -> clear typeahead
   */
  notListedCheckbox?.addEventListener('change', () => {
    if (!notListedCheckbox.checked) {
      return;
    }

    clearTypeahead();
    clearInput(whichChemicalInput);
    manualChemicalContainer?.classList.remove('govuk-visually-hidden');
  });

  /**
   * Scenario 2:
   * Typeahead selected -> uncheck checkbox, clear + hide manual entry
   */
  const handleTypeaheadSelection = () => {
    // Drop stale selection when typed text no longer matches current selection.
    syncTypedValueToSelection();

    if (notListedCheckbox.checked && (whichChemicalInput?.value || typeaheadInput?.value)) {
      notListedCheckbox.checked = false;
      clearInput(manualChemicalInput);
      manualChemicalContainer?.classList.add('govuk-visually-hidden');
    }
  };

  typeaheadInput?.addEventListener('input', handleTypeaheadSelection);
  typeaheadInput?.addEventListener('change', handleTypeaheadSelection);
  whichChemicalInput?.addEventListener('change', handleTypeaheadSelection);
};
