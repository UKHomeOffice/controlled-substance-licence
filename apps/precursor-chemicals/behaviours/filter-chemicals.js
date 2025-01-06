module.exports = superclass => class extends superclass {
  configure(req, res, next) {
    const chosenCategory = req.sessionModel.get('substance-category');
    const options = req.form.options.fields['which-chemical'].options;
    if (chosenCategory !== 'unknown') {
      req.form.options.fields['which-chemical'].options = options.filter(
        option => !option.category || option.category === chosenCategory
      );
    }
    if(req.body['which-chemical']) {
      const selectedChemical = req.body['which-chemical'];
      req.sessionModel.set('selectedChemical', selectedChemical);
    }
    next();
  }
};
