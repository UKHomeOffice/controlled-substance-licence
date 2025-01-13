const chemicals = require('../data/chemicals.json');

findChemical = (chemicals, valueToFind) => {
  return chemicals.find(chemical => chemical.value === valueToFind)
}

parseOperations = (req, opsField, selectedOps, customOp) => {
  // A single checked box will be stored as a string not an array of length 1 so...
  if (typeof selectedOps === 'string') {
    selectedOps = Array.of(selectedOps);
  }

  return selectedOps.map(operation => {
    if (operation === 'other' && customOp) {
      return `${req.translate(`fields.${opsField}.options.${operation}.label`)}: ${customOp}`
    } else return req.translate(`fields.${opsField}.options.${operation}.label`)
  }).join(', ')
}

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    for (const item of locals.items) {
      const customOperations = item.fields.find(field => field.field === 'what-operation')?.value;
      for (const field of item.fields) {
        switch(field.field) {
          case 'which-chemical':
            field.parsed = findChemical(chemicals, field.value)?.label ?? field.value;
            break;
          case 'substance-category':
            field.parsed = field.value === 'unknown' ?
              req.translate(`fields.${field.field}.options.${field.value}.label`) :
              field.value;
            break;
          case 'which-operation':
            field.parsed = parseOperations(req, field.field, field.value, customOperations);
            break;
          default:
            break;
        }
      }
    }
    return locals;
  }
};
