const { getFieldValuesToFilter } = require('../../../utils/index');

module.exports = (aggregateField, fieldToFilter) => superclass => class extends superclass {
  configure(req, res, next) {
    const selectedOption = getFieldValuesToFilter(req, aggregateField, fieldToFilter);
    const options = req.form.options.fields[fieldToFilter].options;
    if (selectedOption.length > 0) {
      req.form.options.fields[fieldToFilter].options = options.filter(option => !selectedOption.includes(option.value));
    }
    next();
  }
};
