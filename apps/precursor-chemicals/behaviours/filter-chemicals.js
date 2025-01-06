module.exports = superclass => class extends superclass {
  configure(req, res, next) {
    const chosenCategory = req.sessionModel.get('substance-category');
    const options = req.form.options.fields['which-chemical'].options;
    if (chosenCategory !== 'unknown') {
      req.form.options.fields['which-chemical'].options = options.filter(
        option => !option.category || option.category === chosenCategory
      );
    }
    next();
  }
};
