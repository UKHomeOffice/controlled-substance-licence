const { getLabel, formatDate, findArrayItemByValue } = require('../../utils');
const chemicals = require('../../apps/precursor-chemicals/data/chemicals.json');
const tradingReasons = require('../../apps/controlled-drugs/data/trading-reasons.json');

describe('Utilities \'getLabel\'', () => {
  test('returns undefined when an unexpected fieldKey parameter is passed', () => {
    expect(getLabel('cheese', 'very-satisfied')).toBe(undefined);
    expect(getLabel(null, 'very-satisfied')).toBe(undefined);
    expect(getLabel(undefined, 'very-satisfied')).toBe(undefined);
  });

  test('returns undefined when an unexpected fieldValue parameter is passed', () => {
    expect(getLabel('satisfaction', 'very-cheese')).toBe(undefined);
    expect(getLabel('satisfaction', null)).toBe(undefined);
    expect(getLabel('satisfaction', undefined)).toBe(undefined);
  });
});

describe('Utilities \'formatDate\'', () => {
  test('reformats a string type date from YYYY-MM-DD to DD MMMM YYYY', () => {
    expect(formatDate('1987-08-14')).toBe('14 August 1987');
  });

  test('reformats a string type date from MM/DD/YYYY to DD MMMM YYYY', () => {
    expect(formatDate('08/14/1987')).toBe('14 August 1987');
  });

  test('throws an error when the parameter cannot be parsed as a date', () => {
    expect(() => formatDate('hello')).toThrow();
  });
});

describe('Utilities \'findArrayItemByValue\'', () => {
  test('finds the correct chemical object from the list for a correct input', () => {
    expect(findArrayItemByValue(chemicals, 'Ephedrine')).toHaveProperty('label', 'Ephedrine (2939 4100)');
    expect(findArrayItemByValue(chemicals, 'Ephedrine')).toHaveProperty('value', 'Ephedrine');
    expect(findArrayItemByValue(chemicals, 'Ephedrine')).toHaveProperty('category', '1');
    expect(findArrayItemByValue(chemicals, 'Ephedrine')).toHaveProperty('cnCode', '2939 4100');
    expect(findArrayItemByValue(chemicals, 'Ephedrine')).not.toHaveProperty('category', '2');
    expect(findArrayItemByValue(tradingReasons, 'broker')).toHaveProperty('label', 'Broker');
    expect(findArrayItemByValue(tradingReasons, 'broker')).toHaveProperty('value', 'broker');
  });

  test('returns undefined when the chemical cannot be found in list', () => {
    expect(findArrayItemByValue(chemicals, 'mayonnaise')).toBe(undefined);
    expect(findArrayItemByValue(tradingReasons, 'Organised crime')).toBe(undefined);
  });
});
