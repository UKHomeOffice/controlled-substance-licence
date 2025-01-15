const { findChemical, parseOperations, translateOption } = require('../../../utils/index');
module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    for (const item of locals.items) {
      const customOperations = item.fields.find(field => field.field === 'what-operation')?.value;
      for (const field of item.fields) {
        switch(field.field) {
          case 'which-chemical':
            field.parsed = findChemical(field.value)?.label ?? field.value;
            break;
          case 'substance-category':
            field.parsed = field.value === 'unknown' ?
              translateOption(req, field.field, field.value) :
              // req.translate(`fields.${field.field}.options.${field.value}.label`) :
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
