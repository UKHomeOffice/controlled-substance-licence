module.exports = superclass => class extends superclass {
  getValues(req, res, next) {
    if (req.sessionModel.get('referred-by-summary')) {
      req.sessionModel.unset('referred-by-summary');
    }
    return super.getValues(req, res, next);
  }
};
