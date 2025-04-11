module.exports = superclass => class extends superclass {
  async getValues(req, res, next) {
    req.sessionModel.reset();

    // todo: auth.logout()
    return super.getValues(req, res, next);
  }
};
