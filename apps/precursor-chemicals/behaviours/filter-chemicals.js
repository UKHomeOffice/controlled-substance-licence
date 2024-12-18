module.exports = superclass => class extends superclass {
  configure(req, res, next) {
    const chosenCategory = req.sessionModel.get('substance-category');
    let options = req.form.options.fields['which-chemical'].options;
    if (chosenCategory !== 'unknown') {
      options = options.filter(option => !option.category || option.category === chosenCategory);
    }
    req.form.options.fields['which-chemical'].options = options;

    next();
  }
};
