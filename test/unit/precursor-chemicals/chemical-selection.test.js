/** @jest-environment jsdom */

const { initChemicalSelection } = require('../../../assets/js/chemical-selection');

'use strict';


const buildDom = ({
  checkboxChecked = false,
  whichChemicalValue = '',
  selectValue = '',
  notListedNameValue = '',
  manualHidden = true
} = {}) => {
  document.body.innerHTML = `
    <div id="fixture">
      <input
          type="checkbox"
          name="is-chemical-not-listed"
          ${checkboxChecked ? 'checked' : ''}
      />
      <input id="which-chemical" value="${whichChemicalValue}" />
      <select id="which-chemical-select">
          <option value=""></option>
          <option value="chem-a" ${selectValue === 'chem-a' ? 'selected' : ''}>Chemical A</option>
          <option value="acetone" ${selectValue === 'acetone' ? 'selected' : ''}>Acetone</option>
      </select>

        <div
          id="not-listed-chemical-name-group"
          class="${manualHidden ? 'govuk-!-display-none' : ''}"
        >
          <input name="not-listed-chemical-name" value="${notListedNameValue}" />
        </div>
    </div>
  `;

  return {
    notListedCheckbox: document.querySelector('input[name="is-chemical-not-listed"]'),
    whichChemicalInput: document.querySelector('#which-chemical'),
    whichChemicalSelect: document.querySelector('#which-chemical-select'),
    notListedChemicalNameInput: document.querySelector('input[name="not-listed-chemical-name"]'),
    notListedChemicalNameContainer: document.querySelector('#not-listed-chemical-name-group')
  };
};

describe('initChemicalSelection', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('checks not-listed flow: clears known chemical fields and shows manual entry', () => {
    const {
      notListedCheckbox,
      notListedChemicalNameInput,
      whichChemicalInput,
      whichChemicalSelect
    } = buildDom({
      checkboxChecked: false,
      whichChemicalValue: 'Acetone',
      selectValue: 'acetone',
      manualHidden: true
    });

    const inputChange = jest.fn();
    const selectChange = jest.fn();

    whichChemicalInput.addEventListener('change', inputChange);
    whichChemicalSelect.addEventListener('change', selectChange);

    initChemicalSelection();

    notListedCheckbox.checked = true;
    notListedCheckbox.dispatchEvent(new Event('change', { bubbles: true }));

    notListedChemicalNameInput.value = 'Manual chemical';

    expect(whichChemicalInput.value).toBe('');
    expect(whichChemicalSelect.value).toBe('');
    expect(notListedChemicalNameInput.value).toBe('Manual chemical');
    expect(inputChange).toHaveBeenCalledTimes(1);
    expect(selectChange).toHaveBeenCalledTimes(1);
  });

  test('on typeahead input, clears stale select value when typed text is not a valid option', () => {
    const { whichChemicalInput, whichChemicalSelect } = buildDom({
      checkboxChecked: false,
      whichChemicalValue: 'Not in options',
      selectValue: 'chem-a'
    });

    initChemicalSelection();

    whichChemicalInput.dispatchEvent(new Event('input', { bubbles: true }));

    expect(whichChemicalSelect.value).toBe('');
  });

  test('unchecks not-listed and clears manual chemical when user switches to a listed chemical', () => {
    const {
      notListedCheckbox,
      whichChemicalInput,
      whichChemicalSelect,
      notListedChemicalNameInput,
      notListedChemicalNameContainer
    } = buildDom({
      checkboxChecked: false,
      whichChemicalValue: '',
      selectValue: '',
      notListedNameValue: '',
      manualHidden: true
    });

    initChemicalSelection();

    notListedCheckbox.checked = true;
    notListedCheckbox.dispatchEvent(new Event('change', { bubbles: true }));

    notListedChemicalNameInput.value = 'Manual chemical';

    whichChemicalSelect.value = 'acetone';
    whichChemicalInput.value = 'Acetone';
    whichChemicalInput.dispatchEvent(new Event('input', { bubbles: true }));

    expect(notListedCheckbox.checked).toBe(false);
    expect(notListedChemicalNameInput.value).toBe('');
    expect(whichChemicalInput.value).toBe('Acetone');
    expect(notListedChemicalNameContainer.classList.contains('govuk-!-display-none')).toBe(true);
  });
});
