module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);

    if (req.sessionModel.get('referred-by-summary')) {
      locals.continueBtn = 'continue';
    }

    return locals;
  }
};
