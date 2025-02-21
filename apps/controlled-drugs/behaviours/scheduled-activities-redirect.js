const checkScheduledActivitySelected = req => [
  req.sessionModel.get('schedule-1-activities'),
  req.sessionModel.get('schedule-2-activities'),
  req.sessionModel.get('schedule-3-activities'),
  req.sessionModel.get('schedule-4-part-1-activities'),
  req.sessionModel.get('schedule-4-part-2-activities'),
  req.sessionModel.get('schedule-5-activities')
].some(Boolean);

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    const scheduledActivitySelected = checkScheduledActivitySelected(req);

    if (req.sessionModel.get('referred-by-summary') && scheduledActivitySelected) {
      locals.continueBtn = 'continue';
    }

    return locals;
  }

  successHandler(req, res, next) {
    const { route: currentRoute, confirmStep } = req.form.options;
    const formApp = req.baseUrl;
    const scheduledActivitySelected = checkScheduledActivitySelected(req);

    this.emit('complete', req, res);

    if (req.sessionModel.get('referred-by-summary')) {
      if (currentRoute.includes('/schedule-') && scheduledActivitySelected) {
        return res.redirect(`${formApp}${confirmStep}`);
      }
    }

    if (currentRoute === '/schedule-5-activities') {
      if(!scheduledActivitySelected) {
        return res.redirect(`${req.baseUrl}/no-activities-selected`);
      }
    }

    return super.successHandler(req, res, next);
  }
};
