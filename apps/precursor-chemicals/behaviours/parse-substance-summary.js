const { findArrayItemByValue, parseOperations, translateOption } = require('../../../utils/index');
const chemicals = require('../data/chemicals.json');

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    for (const item of locals.items) {
      const customOperations = item.fields.find(field => field.field === 'what-operation')?.value;
      for (const field of item.fields) {
        switch(field.field) {
          case 'which-chemical':
            field.parsed = findArrayItemByValue(chemicals, field.value)?.label ?? field.value;
            break;
          case 'substance-category':
            field.parsed = field.value === 'unknown' ?
              translateOption(req, field.field, field.value) :
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

  saveValues(req, res, next) {
    const aggregatedValues = req.sessionModel.get('substances-in-licence')?.aggregatedValues;
    const categories = aggregatedValues.map(item => {
      const categoryField = item.fields.find(field => field.field === 'substance-category');
      return translateOption(req, categoryField.field, categoryField.value);
    }).sort();
    const uniqueCategories = [...new Set(categories)];
    req.sessionModel.set('parsed-substance-categories', uniqueCategories.join('\n'));
    return super.saveValues(req, res, next);
  }
};
