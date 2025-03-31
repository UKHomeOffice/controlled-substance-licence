const buildStepJourneyFromSessionValues = req => {
  const formSteps = Object.keys(req.form.options.steps);
  const stepJourney = [formSteps[0]];

  const addNextStep = steps => {
    const currentStep = steps[steps.length - 1];
    const forksInStep = req.form.options.steps[currentStep].forks;
    const satisfiedForkCondition = forksInStep?.find(fork => {
      const { field, value } = fork.condition;
      return req.sessionModel.get(field) === value;
    });
    const nextStep = satisfiedForkCondition ? satisfiedForkCondition.target : req.form.options.steps[currentStep].next;
    if (nextStep) {
      stepJourney.push(nextStep);
      addNextStep(stepJourney);
    }
  };

  addNextStep(stepJourney);
  return stepJourney;
};

module.exports = superclass => class extends superclass {
  getValues(req, res, next) {
    req.sessionModel.set('referred-by-information-given-summary', true);

    // steps in the session fall out of sync when changed from the current progress report page
    // this reorders them to ensure the user jumps to the last step they filled out
    const sessionSteps = req.sessionModel.get('steps');
    const stepJourneyFromValues = buildStepJourneyFromSessionValues(req);
    const visitedFormSteps = stepJourneyFromValues.filter(step => sessionSteps.includes(step));
    req.sessionModel.set('steps', visitedFormSteps);

    const lastVisitedStep = visitedFormSteps[visitedFormSteps.length - 1];
    const nextStep = stepJourneyFromValues[stepJourneyFromValues.findIndex(item => item === lastVisitedStep) + 1];
    req.sessionModel.set('save-return-next-step', nextStep);

    return super.getValues(req, res, next);
  }

  saveValues(req, res, next) {
    const formApp = req.baseUrl;
    req.sessionModel.set('referred-by-information-given-summary', false);

    const nextUnsavedStep = req.sessionModel.get('save-return-next-step');
    if (nextUnsavedStep) {
      return res.redirect(`${formApp}${nextUnsavedStep}`);
    }
    return super.saveValues(req, res, next);
  }
};
