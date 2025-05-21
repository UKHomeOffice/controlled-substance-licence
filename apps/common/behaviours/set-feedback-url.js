
const config = require('../../../config');

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);

    switch(req.baseUrl) {
      case '/precursor-chemicals':
        res.locals.feedbackUrl = config.feedback.precursorChemicals;
        break;
      case '/controlled-drugs':
        res.locals.feedbackUrl = config.feedback.controlledDrugs;
        break;
      case '/industrial-hemp':
        res.locals.feedbackUrl = config.feedback.industrialHemp;
        break;
      case '/registration':
        res.locals.feedbackUrl = config.feedback.registration;
        break;
      default:
        res.locals.feedbackUrl = config.feedback.common;
        break;
    }

    return locals;
  }
};
