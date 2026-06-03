const CHEMICAL_FIELD = 'which-chemical';
const NOT_LISTED_CHEMICAL_NAME_FIELD = 'not-listed-chemical-name';
const NOT_LISTED_CHEMICAL_CHECKBOX_FIELD = 'is-chemical-not-listed';
const BASE_AGGREGATE_FIELDS = ['substance-category', 'which-operation', 'what-operation'];

const hasValue = value => (typeof value === 'string' ? value.trim().length > 0 : Boolean(value));

const getChemicalNameSourceField = req => {
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

const buildAggregateFrom = req => {
  const aggregateFrom = [getChemicalNameSourceField(req), ...BASE_AGGREGATE_FIELDS];

  // Include checkbox state so LoopAggregator unsets it after adding the item.
  if (hasValue(req.sessionModel.get(NOT_LISTED_CHEMICAL_CHECKBOX_FIELD))) {
    aggregateFrom.push(NOT_LISTED_CHEMICAL_CHECKBOX_FIELD);
  }

  return aggregateFrom;
};

module.exports = superclass => class extends superclass {
  getValues(req, res, next) {
    req.form.options.aggregateFrom = buildAggregateFrom(req);

    return super.getValues(req, res, next);
  }
};
