module.exports = superclass => class extends superclass {
  async getValues(req, res, next) {
    // todo: auth.logout() and remove all session data from all sessions.
    return super.getValues(req, res, next);
  }
};
