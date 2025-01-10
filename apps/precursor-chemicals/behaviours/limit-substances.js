/**
 * Adds the LimitSubstances behaviour to the steps.
 * This provides a flag `noMoreSubstances` that indicates whether the user has
 * reached the maximum number of substances that can be added.
 */

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);

    const limit = req.form.options.aggregateLimit;
    const aggregateTo = req.form.options.aggregateTo;

    const aggregate = req.sessionModel.get(aggregateTo);
    if(aggregate && aggregate.aggregatedValues) {
      locals.noMoreSubstances = aggregate.aggregatedValues.length >= limit;
    }

    return locals;
  }
};