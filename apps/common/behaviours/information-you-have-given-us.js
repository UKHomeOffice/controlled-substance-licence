const { findSatisfiedForkCondition } = require('../../../utils');

const buildStepJourneyFromSessionValues = req => {
  const formSteps = Object.keys(req.form.options.steps);
  const stepJourney = [formSteps[0]];

  const addNextStep = steps => {
    const currentStep = steps[steps.length - 1];
    const forksInStep = req.form.options.steps[currentStep].forks;
    const satisfiedForkCondition = findSatisfiedForkCondition(req, forksInStep);
    const nextStep = satisfiedForkCondition ? satisfiedForkCondition.target : req.form.options.steps[currentStep].next;
    if (nextStep && !stepJourney.includes(nextStep)) {
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

    const sessionSteps = req.sessionModel.get('steps');
    if (!sessionSteps.includes('/information-you-have-given-us')) {
      sessionSteps.push('/information-you-have-given-us');
    }

    const stepJourneyFromValues = buildStepJourneyFromSessionValues(req);

    const nextStep = stepJourneyFromValues.find(step => !sessionSteps.includes(step)) ||
                    req.form.options.confirmStep;

    req.sessionModel.set('save-return-next-step', nextStep);

    return super.getValues(req, res, next);
  }

  saveValues(req, res, next) {
    const formApp = req.baseUrl;
    req.sessionModel.set('referred-by-information-given-summary', false);

    if (req.body.exit) {
      return res.redirect(`${formApp}/save-and-exit`);
    }

    const nextUnsavedStep = req.sessionModel.get('save-return-next-step');

    if (nextUnsavedStep) {
      return res.redirect(`${formApp}${nextUnsavedStep}`);
    }

    return super.saveValues(req, res, next);
  }
};
