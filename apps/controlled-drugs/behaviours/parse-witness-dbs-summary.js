const { formatDate } = require('../../../utils');
const translations = require('../translations/src/en/pages.json');

module.exports = superclass => class extends superclass {
  configure(req, res, next) {
    // To redirect to the loop section intro when all witness details are removed from the summary.
    if (req.sessionModel.get('aggregated-witness-dbs-info') &&
      !req.sessionModel.get('aggregated-witness-dbs-info').aggregatedValues?.length) {
      req.form.options.addStep = 'witness-destruction-of-drugs';
    }
    super.configure(req, res, next);
  }

  /**
  * Manipulate field and value details saved in session when rendering into summary page
  *
  * items.fields contains the aggregated array of field and value pairs
  * items.fields.field is the field name
  * items.fields.value is the field's saved value
  * items.fields.parsed will be preferred as the rendered value if it is truthy for an item
  *
  */
  locals(req, res) {
    const locals = super.locals(req, res);
    locals.items = locals.items.map(item => {
      item.fields = item.fields.map(field => {
        if (field.field?.includes('responsible-for-witnessing-dbs-date-of-issue') && field.value !== undefined) {
          field.parsed = formatDate(field.value);
        }
        // Use summary page custom label if available
        if(translations.confirm?.fields?.[field.field]) {
          field.label = translations.confirm.fields[field.field].label;
        }
        return field;
      });
      return item;
    });
    return locals;
  }
};
