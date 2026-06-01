module.exports = Base => class SetChemicalName extends Base {
  locals(req, res) {
    const whichChemical = req.sessionModel.get('which-chemical');
    const manualChemical = req.sessionModel.get('not-listed-chemical-name');
    return Object.assign({}, super.locals(req, res), {
      chemicalName: whichChemical || manualChemical
    });
  }
};
