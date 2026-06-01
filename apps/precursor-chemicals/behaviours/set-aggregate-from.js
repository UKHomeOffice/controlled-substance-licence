const CHEMICAL_FIELD = 'which-chemical';
const NOT_LISTED_CHEMICAL_NAME_FIELD = 'manually-enter-chemical';

const setChemicalNameField = req => {
  const hasValue = value => (typeof value === 'string' ? value.trim().length > 0 : Boolean(value));
  const whichChemical = req.sessionModel.get(CHEMICAL_FIELD);
  const notListedChemical = req.sessionModel.get(NOT_LISTED_CHEMICAL_NAME_FIELD);

  // Prefer known list selection when both fields are unexpectedly populated.
  if (hasValue(whichChemical)) {
    return CHEMICAL_FIELD;
  }

  if (hasValue(notListedChemical)) {
    return NOT_LISTED_CHEMICAL_NAME_FIELD;
  }

  return CHEMICAL_FIELD;
};

module.exports = superclass => class extends superclass {
  getValues(req, res, next) {
    req.form.options.aggregateFrom = [
      setChemicalNameField(req),
      'substance-category',
      'which-operation',
      'what-operation'
    ];

    return super.getValues(req, res, next);
  }
};
