const { findArrayItemByValue } = require('../../../utils/index');
const businessType = require('../data/business-type.json');

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    for (const item of locals.items) {
      const customOption = item.fields.find(field => field.field === 'other-business-type')?.value;
      item.isOtherOptionSelected = item.fields.some(field =>
        field.field === 'business-type' && field.value === 'other');
      for (const field of item.fields) {
        if (field.field === 'business-type') {
          field.parsed = field.value === 'other' ?
            customOption :
            findArrayItemByValue(businessType, field.value)?.label ?? field.value;
        }
      }
    }
    return locals;
  }
};
