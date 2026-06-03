'use strict';

/**
 * Initialises chemical selection behaviour.
 * Keeps the typeahead input, backing select value, and
 * "not listed" manual-entry flow in sync.
 */
const initChemicalSelection = () => {
  const notListedCheckbox = document.querySelector('input[name="is-chemical-not-listed"]');

  const whichChemicalInput = document.querySelector('input[id="which-chemical"]');
  const whichChemicalSelect = document.querySelector('select[id="which-chemical-select"]');

  const manualChemicalInput = document.querySelector('input[name="not-listed-chemical-name"]');
  const manualChemicalContainer = document.querySelector('#not-listed-chemical-name-group');

  const normalise = value => (value || '').trim().toLowerCase();

  const clearInput = input => {
    if (!input || !input.value) {
      return;
    }

    input.value = '';
    input.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const syncTypedValueToSelection = () => {
    if (!whichChemicalInput || !whichChemicalSelect) {
      return;
    }

    const typedValue = normalise(whichChemicalInput.value);

    if (!typedValue) {
      // If the user clears the visible typeahead, clear the selected value too.
      clearInput(whichChemicalSelect);
      return;
    }

    // Treat either option values or labels as valid typeahead matches.
    const optionValuesAndLabels = new Set(
      Array.from(whichChemicalSelect.options)
        .flatMap(option => [option.value, option.textContent])
        .map(normalise)
        .filter(Boolean)
    );

    // Clear stale selection if typed text is not a valid option.
    if (!optionValuesAndLabels.has(typedValue)) {
      clearInput(whichChemicalSelect);
    }
  };

  /**
   * Scenario 1: "Not listed" checked.
    * Clear typeahead + selected values and show manual entry.
   */
  notListedCheckbox?.addEventListener('change', () => {
    if (!notListedCheckbox.checked) {
      return;
    }

    clearInput(whichChemicalInput);
    clearInput(whichChemicalSelect);
    manualChemicalContainer?.classList.remove('govuk-!-display-none');
  });

  /**
   * Scenario 2: user types/selects a known chemical.
   * Uncheck "not listed", clear manual entry, and hide manual field.
   */
  const handleTypeaheadSelection = () => {
    // Drop stale selection when typed text no longer matches current selection.
    syncTypedValueToSelection();

    if (notListedCheckbox?.checked && (whichChemicalSelect?.value || whichChemicalInput?.value)) {
      notListedCheckbox.checked = false;
      clearInput(manualChemicalInput);
      manualChemicalContainer?.classList.add('govuk-!-display-none');
    }
  };

  // Below 2 conditions added for handling edge cases where the page is re-rendered with validation errors,
  //  to ensure the state of the checkboxes and visibility of manual entry field are correct based on the
  //  current values.
  // if there is any alternative better option find in future to handle this scenario without
  //  relying on DOM manipulation that is currently being done in this section.
  const hasManualChemicalError = manualChemicalContainer?.classList.contains('govuk-form-group--error');

  if (manualChemicalInput?.value) {
    notListedCheckbox.checked = true;
    manualChemicalContainer?.classList.remove('govuk-!-display-none');
  }
  // If nothing has been entered yet, clear the checkbox and keep manual entry hidden.
  if (notListedCheckbox?.checked && !hasManualChemicalError && !manualChemicalInput?.value) {
    notListedCheckbox.checked = false;
    manualChemicalContainer?.classList.add('govuk-!-display-none');
  }

  whichChemicalInput?.addEventListener('input', handleTypeaheadSelection);
};

module.exports = {
  initChemicalSelection
};
