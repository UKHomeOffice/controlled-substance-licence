const { findDataLabelByValue } = require('../../../utils/index');
const tradingReasons = require('../data/trading-reasons.json');
module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    for (const item of locals.items) {
      const customReasons = item.fields.find(field => field.field === 'specify-trading-reasons')?.value;
      for (const field of item.fields) {
        if (field.field === 'trading-reasons') {
          field.parsed = field.value === 'other' ?
            `${findDataLabelByValue(tradingReasons, field.value)?.label ?? field.value}: ${customReasons}` :
            field.parsed = findDataLabelByValue(tradingReasons, field.value)?.label ?? field.value;
        }
      }
    }
    return locals;
  }
};
