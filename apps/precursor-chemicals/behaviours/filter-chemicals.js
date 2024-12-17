const chemicals = require('../data/chemicals.json');

module.exports = superclass => class extends superclass {
  locals(req, res, next) {

  const chosenCategory = req.sessionModel.get('substance-category');
  const categoryChemicals = chemicals
    .filter(chemical => chemical.category === chosenCategory)
  const baseOptions = req.form.options.fields['which-chemical'].options;
  req.form.options.fields['which-chemical'].options = baseOptions.concat(
    chosenCategory !== 'unknown' ? categoryChemicals : chemicals
  );

  return super.locals(req, res, next);
  }
};
